import type { Route } from "./+types/privacy-policy";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Privacy Policy" },
  ];
}

export default function PrivacyPolicy() {
    return (
      <div className="text-center">
        <h1 className="text-4xl text-purple-500 font-bold">🔒 Privacy Policy for Events Bot</h1>
        <header className="flex flex-col items-center gap-9"><br />
          <h2 className="text-2xl text-purple-500 font-semibold">📄 Introduction</h2>
          <p className="text-lg text-white text-justify">
            This Privacy Policy governs the collection, use, and sharing of personal information by <b>Events Bot</b>, a Discord bot developed by <b>Andries (.angel_xd. on Discord)</b>. By using <b>Events Bot</b>, you agree to the terms of this Privacy Policy.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">📊 Information We Collect</h2>
          <p className="text-lg text-white text-justify">
            We collect information that you provide to us through your use of the bot, such as your Discord user ID and username, server and channel information, and message content. We may also collect usage data, such as the frequency and duration of your use of the bot.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">⚙️ How We Use Your Information</h2>
          <p className="text-lg text-white text-justify">
            We use your information to operate and improve <b>Events Bot</b>, including to provide support and respond to your requests. We may also use your information to develop new features or services, to conduct research and analytics, and to comply with legal obligations.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">🤝 Sharing Your Information</h2>
          <p className="text-lg text-white text-justify">
            We do not sell or share your personal information with third parties. However, we may disclose your information in response to legal process or a request from a law enforcement agency or regulatory authority.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">🗃️ Data Retention</h2>
          <p className="text-lg text-white text-justify">
            We retain your information for as long as necessary to provide <b>Events Bot</b>’s services or as required by law. We will delete your information upon your request or when it is no longer needed.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">🔐 Data Security</h2>
          <p className="text-lg text-white text-justify">
            We take reasonable measures to protect your information from unauthorized access, alteration, or destruction. However, no security measure is perfect, and we cannot guarantee the security of your information.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">🔁 Changes to this Policy</h2>
          <p className="text-lg text-white text-justify">
            We may update this Privacy Policy from time to time, and we will post the updated policy on our website. Your continued use of <b>Events Bot</b> after we make changes to this policy indicates your acceptance of the revised policy.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">📫 Contact Us</h2>
          <p className="text-lg text-white text-justify">
            If you have any questions or concerns about this Privacy Policy, please contact me at <b>.angel_xd. on Discord</b>.
          </p>
  
          <h2 className="text-2xl text-purple-500 font-semibold">📅 Effective Date</h2>
          <p className="text-lg text-white text-justify">
            This Privacy Policy is effective as of <b>4 May 2025</b>.
          </p>
          <br></br>
          <br></br>
        </header>
      </div>
    )
  }