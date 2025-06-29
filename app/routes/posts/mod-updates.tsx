import type { Route } from "./+types/mod-updates";
import PostMeta from "../../components/PostMeta";

export function meta({ }: Route.MetaArgs) {
return [
{ title: "Mod Updates" },
];
}

export default function ModUpdates() {
return (
<div className="max-w-2xl mx-auto px-4 py-8 text-center">
<PostMeta  
category="Mod"  
date="May 26, 2025"  
updated="May 27, 2025"  
author="Andries"  
/>

<h1 className="text-3xl font-bold mt-6">Mod Updates</h1>  

  <p className="mt-4 text-muted-foreground">  
    Welcome to the mod updates page! Here, you'll find the latest features, bug fixes,  
    and changes to our mod. Stay tuned for more!  
  </p>  

  <div className="mt-8 text-left">  
    <h2 className="text-xl font-semibold mb-2">Latest Changes</h2>  

    {/* Image directly below the heading */}  
    <div className="mb-4">  
      <img  
        src="/version-1-0-0.png"  
        alt="Latest Mod Update Banner"  
        className="mx-auto rounded-lg max-h-24 w-auto object-contain"  
      />  
    </div>  

    <ul className="list-disc list-inside space-y-2">  
      <li>Added 17 new colors.</li>  
      <li>Added the "Traitor" role.</li>  
    </ul>  
    <br />  

    <div className="mb-4">  
      <img  
        src="/version-1-1-0.png"  
        alt="Latest Mod Update Banner"  
        className="mx-auto rounded-lg max-h-24 w-auto object-contain"  
      />  
    </div>  

    <ul className="list-disc list-inside space-y-2">  
      <li>Added the "Teleporter" role.</li>  
      <li>Added the "Chameleon" role.</li>  
      <li>Added the "Executioner" role.</li>  
      <li>Added the "Neutral Killer" role as a template role.</li>  
      <li>Updated the cosmetics for the "VIP" modifier.</li>  
      <li>Updated the "Crewmate Roles" to "♦ Crewmate Roles ♦" and so on for the others.</li>  
    </ul>  
  </div>  
</div>

);
}
