#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# Process the file
awk '
BEGIN { found = 0; }
{
    if (!found && $0 ~ /<div class="disclaimer">/) {
        found = 1;
        print $0;
        getline;
        print $0;
        print "                </div>";
        print "";
        print "                <div class=\"highlight\" style=\"margin-top: 40px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #d63384;\">";
        print "                    <h3>📘 Related Guide</h3>";
        print "                    <p>";
        print "                        Need more detail on Botox units by area, cost, and duration?";
        print "                        <a href=\"/resources/botox-dosage-guide\" style=\"color: #d63384; text-decoration: none; font-weight: 500;\">";
        print "                            Read the full Botox dosage guide →";
        print "                        </a>";
        print "                    </p>";
        print "                </div>";
        found = 0;
    } else {
        print $0;
    }
}
' templates/botox_calculator.html > "$tmp_file"

# Replace the original file with the modified content
mv "$tmp_file" templates/botox_calculator.html
chmod 644 templates/botox_calculator.html

echo "Updated Botox calculator template"
