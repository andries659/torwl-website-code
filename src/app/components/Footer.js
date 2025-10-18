import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer
            style={{
                width: "100%",        // full width
                padding: "1rem 0",    // vertical padding only
                textAlign: "center",  // center content
                color: "#ffffff",   // text color (adjust as needed)
            }}
        >
            <p>&copy; 2025 TOR-W: L</p>
            <p>Made with <FontAwesomeIcon icon={faHeart} /> by Andries using Next.js!</p>
            <p>This mod is not affiliated with Among Us or Innersloth LLC, and the content contained therein is not endorsed or otherwise sponsored by Innersloth LLC. Portions of the materials contained herein are property of Innersloth LLC. © Innersloth LLC.</p>
        </footer>
    );
}
