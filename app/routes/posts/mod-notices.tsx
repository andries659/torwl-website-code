import type { Route } from "./+types/mod-notices";
import React from "react";

export function meta({ }: Route.MetaArgs) {
  return [{ title: "Mod Notices" }];
}

export default function ModNotices() {
  return (
    <section className="text-white space-y-10">
      {/* Intro */}
      <br />
      <div className="w-full max-w-7xl mx-auto bg-black/50 rounded-2xl p-10 backdrop-blur-md shadow-xl text-center border-2 border-red-500">
        <h2 className="text-2xl text-red-500 font-semibold">📢 Mod Notices</h2>
        <p className="mt-2">Stay up to date with the latest updates, warnings, and important information for TOR-W: L.</p>
        <p className="mt-2 font-semibold">What are Mod Notices?</p>
        <p className="mt-1">
          These are official announcements related to the mod, including updates, bug reports, compatibility issues, or planned changes.
        </p>
      </div>
      <br />
    </section>
  );
}
