import { useState } from "react";

const SEGMENTS = {
  casual: { label: "Casual", users: 5322, ordersPerUser4mo: 12.17, aov: 45.11, revenuePerUser: 41.18, takeRate: 0.075, color: "#6366f1", baseRetention: 0.398 },
  enthusiast: { label: "Enthusiast", users: 2535, ordersPerUser4mo: 17.38, aov: 41.87, revenuePerUser: 56.66, takeRate: 0.078, color: "#8b5cf6", baseRetention: 0.491 },
  reseller: { label: "Reseller", users: 2478, ordersPerUser4mo: 25.98, aov: 40.88, revenuePerUser: 83.34, takeRate: 0.079, color: "#a855f7", baseRetention: 0.552 },
};

const fmt = (n) => n.toLocaleString("en-GB", { maximumFractionDigits: 0 });
const fmtD = (n) => "£" + n.toLocaleString("en-GB", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const fmtPct = (n) => (n * 100).toFixed(1) + "%";

function Slider({ label, value, onChange, min, max, step, format, desc }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#e2e8f0" }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#a78bfa" }}>{format(value)}</span>
      </div>
      {desc && <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3 }}>{desc}</div>}
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: "#8b5cf6" }} />
    </div>
  );
}

function MetricCard({ label, value, sub, positive }) {
  const color = positive === undefined ? "#e2e8f0" : positive ? "#4ade80" : "#f87171";
  return (
    <div style={{ background: "#1e293b", borderRadius: 10, padding: "12px 14px", flex: 1, minWidth: 130 }}>
      <div style={{ fontSize: 10, color: "#94a3b8", marginBottom: 3, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700, color }}>{value}</div>
      {sub && <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function computeSegment(data, params) {
  const { subPrice, couponValue, appStoreCut, months, couponAovUplift, subChurn, adoptPct, baseBreakage, retentionBoostPp, incrOrdersPerMonth } = params;
  const potentialSubs = Math.round(data.users * adoptPct);
  let subs = potentialSubs;
  let totalSubRev = 0, totalCouponCost = 0, totalIncrFees = 0, totalRetained = 0, totalIncrOrderFees = 0;
  const effectiveSubChurn = Math.max(0.01, subChurn - retentionBoostPp);

  for (let m = 0; m < months; m++) {
    totalRetained += subs;
    totalSubRev += subs * subPrice * (1 - appStoreCut);
    const redeemers = subs * (1 - baseBreakage);
    totalCouponCost += redeemers * couponValue;
    totalIncrFees += redeemers * data.aov * (1 + couponAovUplift) * data.takeRate;
    totalIncrOrderFees += subs * incrOrdersPerMonth * data.aov * data.takeRate;
    subs = Math.round(subs * (1 - effectiveSubChurn));
  }

  const net = totalSubRev + totalIncrFees + totalIncrOrderFees - totalCouponCost;
  return { totalSubRev, totalCouponCost, totalIncrFees, totalIncrOrderFees, net, potentialSubs, avgRetained: totalRetained / months, totalRetained };
}

export function SubscriptionModelDemo() {
  const [subPrice, setSubPrice] = useState(4.99);
  const [couponValue, setCouponValue] = useState(20);
  const [appStoreCut, setAppStoreCut] = useState(0.30);
  const [months, setMonths] = useState(12);
  const [couponAovUplift, setCouponAovUplift] = useState(0.25);
  const [subChurn, setSubChurn] = useState(0.12);

  const [casualAdopt, setCasualAdopt] = useState(0.05);
  const [enthAdopt, setEnthAdopt] = useState(0.12);
  const [resellerAdopt, setResellerAdopt] = useState(0.20);

  const [casualBreak, setCasualBreak] = useState(0.80);
  const [enthBreak, setEnthBreak] = useState(0.72);
  const [resellerBreak, setResellerBreak] = useState(0.65);

  const [resellerRetBoost, setResellerRetBoost] = useState(0.05);
  const [enthRetBoost, setEnthRetBoost] = useState(0.03);
  const [casualRetBoost, setCasualRetBoost] = useState(0.00);

  const [resellerIncrOrders, setResellerIncrOrders] = useState(1.5);
  const [enthIncrOrders, setEnthIncrOrders] = useState(1.0);
  const [casualIncrOrders, setCasualIncrOrders] = useState(0.5);

  const [activeTab, setActiveTab] = useState("design");

  const mkParams = (adoptPct, baseBreakage, retBoost, incrOrders) => ({
    subPrice, couponValue, appStoreCut, months, couponAovUplift, subChurn,
    adoptPct, baseBreakage, retentionBoostPp: retBoost, incrOrdersPerMonth: incrOrders,
  });

  const cas = computeSegment(SEGMENTS.casual, mkParams(casualAdopt, casualBreak, casualRetBoost, casualIncrOrders));
  const ent = computeSegment(SEGMENTS.enthusiast, mkParams(enthAdopt, enthBreak, enthRetBoost, enthIncrOrders));
  const res = computeSegment(SEGMENTS.reseller, mkParams(resellerAdopt, resellerBreak, resellerRetBoost, resellerIncrOrders));

  const totalNet = cas.net + ent.net + res.net;
  const totalSubRev = cas.totalSubRev + ent.totalSubRev + res.totalSubRev;
  const totalCouponCost = cas.totalCouponCost + ent.totalCouponCost + res.totalCouponCost;
  const totalIncrFees = cas.totalIncrFees + ent.totalIncrFees + res.totalIncrFees;
  const totalIncrOrderFees = cas.totalIncrOrderFees + ent.totalIncrOrderFees + res.totalIncrOrderFees;
  const totalSubs = cas.potentialSubs + ent.potentialSubs + res.potentialSubs;
  const totalAvgRetained = cas.avgRetained + ent.avgRetained + res.avgRetained;
  const totalRetainedAll = cas.totalRetained + ent.totalRetained + res.totalRetained;

  const baseRetAvg = 0.40;
  const effectiveChurnRes = Math.max(0.01, subChurn - resellerRetBoost);
  const effectiveChurnEnt = Math.max(0.01, subChurn - enthRetBoost);
  const effectiveChurnCas = Math.max(0.01, subChurn - casualRetBoost);
  const avgEffectiveChurn = (effectiveChurnRes + effectiveChurnEnt + effectiveChurnCas) / 3;
  const subRetained6 = Math.pow(1 - avgEffectiveChurn, 6);
  const purchaseRetained6 = Math.pow(baseRetAvg, 6);

  const segRows = [
    { key: "reseller", d: SEGMENTS.reseller, r: res },
    { key: "enthusiast", d: SEGMENTS.enthusiast, r: ent },
    { key: "casual", d: SEGMENTS.casual, r: cas },
  ];

  const tabStyle = (t) => ({
    padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", borderRadius: 6,
    background: activeTab === t ? "#334155" : "transparent",
    color: activeTab === t ? "#e2e8f0" : "#64748b",
    border: "none",
  });

  return (
    <div style={{ background: "#0f172a", color: "#e2e8f0", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", padding: 20 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 2, color: "#f8fafc" }}>Subscription + Monthly Coupon Model</h1>
        <p style={{ fontSize: 12, color: "#64748b", marginBottom: 20 }}>Based on Tilt buyer data (Oct 2025 – Jan 2026) with retention & frequency uplift</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
          <MetricCard label={`${months}mo Net P&L`} value={fmtD(totalNet)} sub={`${fmtD(totalNet / months)}/mo`} positive={totalNet >= 0} />
          <MetricCard label="Subscribers" value={fmt(totalSubs)} sub={`${fmt(Math.round(totalAvgRetained))} avg retained`} />
          <MetricCard label="Sub Revenue" value={fmtD(totalSubRev)} sub="after app store" />
          <MetricCard label="Coupon Cost" value={fmtD(totalCouponCost)} positive={false} />
          <MetricCard label="Coupon Fees" value={fmtD(totalIncrFees)} sub="from redeemed orders" />
          <MetricCard label="Freq. Uplift Fees" value={fmtD(totalIncrOrderFees)} sub="from extra orders" />
          <MetricCard label="6mo Sub Retention" value={fmtPct(subRetained6)} sub={`vs ${fmtPct(purchaseRetained6)} purchase`} positive={subRetained6 > purchaseRetained6} />
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button style={tabStyle("design")} onClick={() => setActiveTab("design")}>Subscription Design</button>
          <button style={tabStyle("segments")} onClick={() => setActiveTab("segments")}>Segment Assumptions</button>
        </div>

        <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, marginBottom: 20, minHeight: 260 }}>
          {activeTab === "design" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <div>
                <Slider label="Subscription Price" value={subPrice} onChange={setSubPrice} min={1.99} max={14.99} step={0.5} format={fmtD} />
                <Slider label="Monthly Reward Value" value={couponValue} onChange={setCouponValue} min={2} max={25} step={1} format={fmtD} />
                <Slider label="App Store Cut" value={appStoreCut} onChange={setAppStoreCut} min={0} max={0.30} step={0.01} format={fmtPct} desc="30% iOS/Android, 0% if web-only billing" />
              </div>
              <div>
                <Slider label="Coupon AOV Uplift" value={couponAovUplift} onChange={setCouponAovUplift} min={0} max={0.50} step={0.05} format={fmtPct} desc="Current data: ~25% higher baskets on coupon orders" />
                <Slider label="Base Monthly Sub Churn" value={subChurn} onChange={setSubChurn} min={0.03} max={0.30} step={0.01} format={fmtPct} desc="Before retention boost. Purchase non-retention: ~60%/mo" />
                <Slider label="Model Duration" value={months} onChange={setMonths} min={3} max={24} step={1} format={v => v + " months"} />
              </div>
            </div>
          )}

          {activeTab === "segments" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
              {[
                { label: "Reseller", color: SEGMENTS.reseller.color, sub: "26 orders/4mo · $83 rev",
                  adopt: resellerAdopt, setAdopt: setResellerAdopt, brk: resellerBreak, setBrk: setResellerBreak,
                  ret: resellerRetBoost, setRet: setResellerRetBoost, incr: resellerIncrOrders, setIncr: setResellerIncrOrders,
                  brkDesc: "Data: 96% staff, 70% challenge", retDesc: "Data suggests ~5pp from coupons" },
                { label: "Enthusiast", color: SEGMENTS.enthusiast.color, sub: "17 orders/4mo · $57 rev",
                  adopt: enthAdopt, setAdopt: setEnthAdopt, brk: enthBreak, setBrk: setEnthBreak,
                  ret: enthRetBoost, setRet: setEnthRetBoost, incr: enthIncrOrders, setIncr: setEnthIncrOrders,
                  brkDesc: "Data: 97% staff, 67% challenge", retDesc: "Data suggests ~3pp from coupons" },
                { label: "Casual", color: SEGMENTS.casual.color, sub: "12 orders/4mo · $41 rev",
                  adopt: casualAdopt, setAdopt: setCasualAdopt, brk: casualBreak, setBrk: setCasualBreak,
                  ret: casualRetBoost, setRet: setCasualRetBoost, incr: casualIncrOrders, setIncr: setCasualIncrOrders,
                  brkDesc: "Data: 98% staff, 77% challenge", retDesc: "Data shows 0 or negative effect" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: s.color, marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 10, color: "#64748b", marginBottom: 12 }}>{s.sub}</div>
                  <Slider label="Adoption" value={s.adopt} onChange={s.setAdopt} min={0.01} max={0.50} step={0.01} format={fmtPct} />
                  <Slider label="Base Breakage" value={s.brk} onChange={s.setBrk} min={0.20} max={0.95} step={0.05} format={fmtPct} desc={s.brkDesc} />
                  <Slider label="Retention Boost" value={s.ret} onChange={s.setRet} min={0} max={0.15} step={0.01} format={v => "+" + fmtPct(v)} desc={s.retDesc} />
                  <Slider label="Incr. Orders/Mo" value={s.incr} onChange={s.setIncr} min={0} max={5} step={0.5} format={v => "+" + v.toFixed(1)} desc="Extra orders driven by subscription" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: "#1e293b", borderRadius: 12, padding: 20, overflowX: "auto", marginBottom: 20 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: "#a78bfa" }}>{months}-Month P&L by Segment</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #334155" }}>
                {["Segment", "Users", "Subs", "Avg Ret.", "Sub Rev", "Coupon Cost", "Coupon Fees", "Freq. Uplift", "Net P&L", "Per Sub/Mo"].map(h => (
                  <th key={h} style={{ padding: "7px 6px", textAlign: h === "Segment" ? "left" : "right", color: "#94a3b8", fontWeight: 600, fontSize: 11 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {segRows.map(({ key, d, r }) => (
                <tr key={key} style={{ borderBottom: "1px solid #334155" }}>
                  <td style={{ padding: "8px 6px", fontWeight: 600, color: d.color }}>{d.label}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#cbd5e1" }}>{fmt(d.users)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#cbd5e1" }}>{fmt(r.potentialSubs)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#cbd5e1" }}>{fmt(Math.round(r.avgRetained))}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#93c5fd" }}>{fmtD(r.totalSubRev)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#fca5a5" }}>({fmtD(r.totalCouponCost)})</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#93c5fd" }}>{fmtD(r.totalIncrFees)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: "#93c5fd" }}>{fmtD(r.totalIncrOrderFees)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 700, color: r.net >= 0 ? "#4ade80" : "#f87171" }}>{fmtD(r.net)}</td>
                  <td style={{ padding: "8px 6px", textAlign: "right", color: r.totalRetained > 0 && r.net / r.totalRetained >= 0 ? "#4ade80" : "#f87171" }}>
                    {fmtD(r.totalRetained > 0 ? r.net / r.totalRetained : 0)}
                  </td>
                </tr>
              ))}
              <tr style={{ borderTop: "2px solid #475569" }}>
                <td style={{ padding: "8px 6px", fontWeight: 700 }}>Total</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600 }}>{fmt(SEGMENTS.casual.users + SEGMENTS.enthusiast.users + SEGMENTS.reseller.users)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600 }}>{fmt(totalSubs)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600 }}>{fmt(Math.round(totalAvgRetained))}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600, color: "#93c5fd" }}>{fmtD(totalSubRev)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600, color: "#fca5a5" }}>({fmtD(totalCouponCost)})</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600, color: "#93c5fd" }}>{fmtD(totalIncrFees)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 600, color: "#93c5fd" }}>{fmtD(totalIncrOrderFees)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 700, color: totalNet >= 0 ? "#4ade80" : "#f87171" }}>{fmtD(totalNet)}</td>
                <td style={{ padding: "8px 6px", textAlign: "right", fontWeight: 700, color: totalRetainedAll > 0 && totalNet / totalRetainedAll >= 0 ? "#4ade80" : "#f87171" }}>
                  {fmtD(totalRetainedAll > 0 ? totalNet / totalRetainedAll : 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ background: "#1e293b", borderRadius: 12, padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: "#a78bfa" }}>Data Sources & Assumptions</h3>
          <div style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.7 }}>
            <div><strong style={{ color: "#cbd5e1" }}>Segment data:</strong> Oct 2025 – Jan 2026 actuals from Tilt orders</div>
            <div><strong style={{ color: "#cbd5e1" }}>Coupon AOV uplift:</strong> Coupon orders avg $47 vs $38 non-coupon (25% observed)</div>
            <div><strong style={{ color: "#cbd5e1" }}>Breakage defaults:</strong> Midpoint between staff-granted (96–98%) and challenge (67–77%)</div>
            <div><strong style={{ color: "#cbd5e1" }}>Retention boost:</strong> Coupon redeemers show +11pp (reseller), +5pp (enthusiast), -5pp (casual) vs non-redeemers. Defaults halved for causation discount.</div>
            <div><strong style={{ color: "#cbd5e1" }}>Incremental orders:</strong> Conservative estimate; redeemers show 2x frequency but most is selection bias</div>
            <div><strong style={{ color: "#cbd5e1" }}>Not modeled:</strong> Variable reward distributions, word-of-mouth, upgrade/downgrade paths, seasonal effects</div>
          </div>
        </div>
      </div>
    </div>
  );
}
