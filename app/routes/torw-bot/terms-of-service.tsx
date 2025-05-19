import type { Route } from "./+types/terms-of-service";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "TOR-W Bot - Terms of Service" },
  ];
}

export default function TermsOfService() {
    return (
      <div className="text-center">
        <h1 style={{ color: "#32a860" }} className="text-4xl font-bold">📜 Terms of Service For TOR-W Bot</h1>
        <header className="flex flex-col items-center gap-9"><br />
          <p className="text-lg text-white text-justify">
            This Terms of Service Agreement (the <b>“Agreement”</b>) is entered into between <b>Andries (.angel_xd.)</b> ("Bot Owner") and the user ("User") of the <b>TOR-W Bot</b> Discord bot (the "Bot").
          </p>
  
          <p className="text-lg text-white text-justify">
            By using the Bot, the User agrees to be bound by the terms of this Agreement. If the User does not agree to the terms of this Agreement, they should immediately discontinue use of the Bot.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">1. 🧪 Use of the Bot</h2>
          <p className="text-lg text-white text-justify">
            The Bot Owner grants the User a non-exclusive, non-transferable, limited license to use the Bot for personal or non-commercial purposes.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">2. 🚫 Prohibited Use</h2>
          <p className="text-lg text-white text-justify">
            The User may not use the Bot in any way that violates applicable laws, rules, or regulations or infringes upon the rights of any third party. Commercial use is prohibited without the express written consent of the Bot Owner.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">3. ⚠️ Limitation of Liability</h2>
          <p className="text-lg text-white text-justify">
            The Bot Owner shall not be liable for any damages arising from the use or inability to use the Bot, including but not limited to loss of profits, data, or other intangible losses.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">4. 🔄 Modifications to the Bot</h2>
          <p className="text-lg text-white text-justify">
            The Bot Owner may modify or discontinue the Bot at any time without notice. The User agrees the Bot Owner shall not be liable for any modification, suspension, or discontinuance.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">5. 🧠 Intellectual Property</h2>
          <p className="text-lg text-white text-justify">
            The Bot and all associated intellectual property rights remain the property of the Bot Owner. The User agrees not to copy, modify, or distribute the Bot without written consent.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">6. 🛡️ Indemnification</h2>
          <p className="text-lg text-white text-justify">
            The User agrees to indemnify and hold harmless the Bot Owner and affiliates from all claims, damages, liabilities, costs, and expenses, including legal fees, arising from use of the Bot.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">7. ⛔ Termination</h2>
          <p className="text-lg text-white text-justify">
            Either party may terminate this Agreement at any time. Upon termination, the User must cease all use of the Bot immediately.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">8. ⚖️ Governing Law</h2>
          <p className="text-lg text-white text-justify">
            This Agreement is governed by the laws of <b>Mpumalanga</b>. Disputes shall be resolved through arbitration under the rules of <b>the Arbitration Foundation of Southern Africa (AFSA)</b>.
          </p>
  
          <h2 style={{ color: "#32a860" }} className="text-2xl font-semibold">9. 📘 Entire Agreement</h2>
          <p className="text-lg text-white text-justify">
            This document constitutes the entire agreement and supersedes any prior agreements, written or oral, relating to the Bot.
          </p>
  
          <p className="text-lg text-white text-justify">
            By using the Bot, the User acknowledges they have read, understood, and agreed to be bound by these terms.
          </p>
          <br></br>
          <br></br>
        </header>
      </div>
    );
  }  
