import { StitchToolClient } from "@google/stitch-sdk";
import fs from 'fs';

const client = new StitchToolClient({ apiKey: process.env.STITCH_API_KEY });

async function main() {
  try {
    // Create a new project for this animation
    console.log("Creating project...");
    const project = await client.callTool("create_project", {
      title: "Normal Animation — Brand Piece"
    });
    console.log("Project:", JSON.stringify(project, null, 2).substring(0, 500));

    const projectId = project.projectId || project.name?.split('/').pop();
    console.log("Project ID:", projectId);

    if (!projectId) {
      console.error("Could not extract project ID. Full result:", JSON.stringify(project));
      await client.close();
      return;
    }

    // Generate Scene 1: Lab results with "Normal" stamps
    console.log("\n--- Generating Scene 1: Lab Results ---");
    const scene1 = await client.callTool("generate_screen_from_text", {
      projectId: projectId,
      deviceType: "MOBILE",
      prompt: `Design a single dramatic screen for a brand animation (1080x1080 square, social media).

CONCEPT: A clinical lab results view that feels cold and institutional.

BACKGROUND: Very dark navy #0a0f1a
FONT: Inter for all text, monospace for numbers

LAYOUT (vertically stacked, centered):
- Small header "YOUR LAB RESULTS" in dim gray (#3a4050), uppercase, letterspaced, monospace
- 4 rows, each showing:
  - Label (like "Vitamin D", "Cortisol", "Testosterone", "Fasting Glucose") in light gray
  - Large number value in white, monospace font (like "22 ng/mL", "18 μg/dL", "320 ng/dL", "98 mg/dL")
  - A green bordered badge stamp on the right saying "NORMAL ✓" in green (#6ec89b), slightly rotated
- Each row separated by a thin dark border line
- Everything feels clinical, detached, institutional — like a medical printout on a dark screen

FEEL: Cold. Clinical. Everything looks fine on paper. The green stamps should feel almost dismissive — routine, automated.
NO navigation, no buttons, no header bar. This is a single frame from an animation.`
    });

    const result1Str = JSON.stringify(scene1, null, 2);
    fs.writeFileSync('/tmp/claude-0/stitch-scene1-result.json', result1Str);
    console.log("Scene 1 result saved. Keys:", Object.keys(scene1));
    if (scene1.outputComponents) {
      for (const comp of scene1.outputComponents) {
        if (comp.screen) {
          console.log("Screen found:", JSON.stringify(comp.screen).substring(0, 300));
        }
        if (comp.text) {
          console.log("Text:", comp.text.substring(0, 200));
        }
      }
    }

    // Generate Scene 2: "But you don't feel normal"
    console.log("\n--- Generating Scene 2: The Break ---");
    const scene2 = await client.callTool("generate_screen_from_text", {
      projectId: projectId,
      deviceType: "MOBILE",
      prompt: `Design a single dramatic screen for a brand animation (1080x1080 square, social media).

CONCEPT: An emotional break — the patient's voice cutting through the clinical noise.

BACKGROUND: Very dark navy #0a0f1a, completely clean, no elements except the text.

CENTER OF SCREEN:
- "But you don't" in large serif font (DM Serif Display), light gray (#E0E0E0), weight 300
- Below it: "feel normal." in larger serif font, italic, in a warm red/coral color (#e8785e)
- The "feel normal" text should be noticeably larger and heavier than "But you don't"
- Generous whitespace around the text — the emptiness IS the design

FEEL: Vulnerable. Intimate. Like someone finally saying what they've been thinking. The contrast between the cold clinical scene before and this raw emotional statement. The red/coral on "feel normal" is the first warm color — it's the human breaking through the data.

NO other elements. NO navigation, buttons, images. Pure typography on dark background. This is the most important frame — less is more.`
    });

    const result2Str = JSON.stringify(scene2, null, 2);
    fs.writeFileSync('/tmp/claude-0/stitch-scene2-result.json', result2Str);
    console.log("Scene 2 result saved. Keys:", Object.keys(scene2));

    // Generate Scene 3: Recontextualization
    console.log("\n--- Generating Scene 3: Recontextualization ---");
    const scene3 = await client.callTool("generate_screen_from_text", {
      projectId: projectId,
      deviceType: "MOBILE",
      prompt: `Design a single dramatic screen for a brand animation (1080x1080 square, social media).

CONCEPT: The same lab numbers, but now with CONTEXT that changes everything.

BACKGROUND: Very dark navy #0a0f1a

LAYOUT: Show 3 recontextualization cards stacked vertically with generous spacing:

Card 1 - Vitamin D:
- Label "Vitamin D" in dim gray at top
- Old value "22 ng/mL" in gray monospace with a RED strikethrough line through it
- Arrow → then new value "50-80" in green (#6ec89b) monospace, bold
- Below new value: "Where fatigue resolves" in warm amber (#e89b3e), italic serif
- Red "Normal" label in top-right corner, also struck through

Card 2 - Testosterone:
- Same layout: "320 ng/dL" struck through → "vs. your age" in green
- Context line: "Normal for 80. Not for 35." in amber italic

Card 3 - Fasting Glucose:
- Same layout: "98 mg/dL" struck through → "< 85" in green
- Context line: "Where insulin resistance starts" in amber italic

Each card has:
- Subtle dark background (rgba white 3%)
- Teal (#0e7a7e) left border accent, 4-6px
- Rounded corners

FEEL: The "aha moment." Each strikethrough is a mini-revelation — what you thought was fine is actually not optimal. The green new values and amber context lines feel like someone finally explaining what nobody told you.`
    });

    const result3Str = JSON.stringify(scene3, null, 2);
    fs.writeFileSync('/tmp/claude-0/stitch-scene3-result.json', result3Str);
    console.log("Scene 3 result saved. Keys:", Object.keys(scene3));

    // Generate Scene 4: Brand hit
    console.log("\n--- Generating Scene 4: Brand Hit ---");
    const scene4 = await client.callTool("generate_screen_from_text", {
      projectId: projectId,
      deviceType: "MOBILE",
      prompt: `Design a single dramatic screen for a brand animation (1080x1080 square, social media).

CONCEPT: The brand message — one powerful statement that reframes everything.

BACKGROUND: Very dark navy #0a0f1a, clean.

CENTER OF SCREEN, vertically stacked:
- "The number was never wrong." in medium-large text, dim gray (#6b7280), sans-serif (Inter), regular weight
- Below it, bigger and bolder:
  - "The" in white, large serif (DM Serif Display)
  - "context" in VERY large green (#6ec89b), serif, this word should DOMINATE the frame — it's the hero word
  - "was missing." in white, large serif, on the line below "context"
- Below the text: a small green dot (#6ec89b), 12-16px, with a subtle green glow/shadow around it — this is the brand element
- A thin green gradient line (short, ~60px wide) below the dot, fading from green to transparent

TYPOGRAPHY HIERARCHY: "context" must be at least 1.5x larger than the other words. It's the single most important word in the entire animation.

FEEL: Clarity after confusion. The answer was simple all along. The green "context" word should feel like a light turning on — it's the brand's core promise made visible.

NO other elements. Pure typography + brand dot.`
    });

    const result4Str = JSON.stringify(scene4, null, 2);
    fs.writeFileSync('/tmp/claude-0/stitch-scene4-result.json', result4Str);
    console.log("Scene 4 result saved. Keys:", Object.keys(scene4));

    // Wait and then list all screens
    console.log("\n--- Waiting 15s then listing all screens ---");
    await new Promise(r => setTimeout(r, 15000));

    const screens = await client.callTool("list_screens", { projectId });
    console.log("All screens:", JSON.stringify(screens, null, 2).substring(0, 3000));

    // Try to get each screen's HTML/image
    if (screens && screens.screens) {
      for (let i = 0; i < screens.screens.length; i++) {
        const s = screens.screens[i];
        const sid = s.screenId || s.name?.split('/').pop();
        console.log(`\nGetting screen ${i} (${sid})...`);
        const detail = await client.callTool("get_screen", {
          projectId: projectId,
          screenId: sid,
        });

        if (detail.htmlUri) {
          console.log(`  HTML URI: ${detail.htmlUri}`);
          const resp = await fetch(detail.htmlUri);
          fs.writeFileSync(`/tmp/claude-0/stitch-normal-scene${i+1}.html`, await resp.text());
          console.log(`  HTML saved to stitch-normal-scene${i+1}.html`);
        }
        if (detail.imageUri) {
          console.log(`  Image URI: ${detail.imageUri}`);
          const resp = await fetch(detail.imageUri);
          fs.writeFileSync(`/tmp/claude-0/stitch-normal-scene${i+1}.png`, Buffer.from(await resp.arrayBuffer()));
          console.log(`  Image saved to stitch-normal-scene${i+1}.png`);
        }
      }
    }

    await client.close();
    console.log("\nDone.");
  } catch (err) {
    console.error("Error:", err.message);
    console.error("Stack:", err.stack?.substring(0, 500));
    await client.close();
  }
}

main();
