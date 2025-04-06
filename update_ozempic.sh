#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# Process the file
awk '
BEGIN { found = 0; }
{
    if (!found && $0 ~ /<div class="chart-container">/) {
        found = 1;
        line_count = 0;
    }

    if (found) {
        line_count++;
        if (line_count <= 5) {
            print $0;
            if ($0 ~ /<\/div>/ && line_count == 5) {
                print "        ";
                print "        <div class=\"highlight\" style=\"margin-top: 40px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #d63384;\">";
                print "            <h3>📘 Related Guide</h3>";
                print "            <p>";
                print "                Learn more about Ozempic dosage, weight loss timelines, and what to expect during treatment.";
                print "                <a href=\"/resources/ozempic-weight-loss-calculator-guide\" style=\"color: #d63384; text-decoration: none; font-weight: 500;\">";
                print "                    Read the full Ozempic calculator guide →";
                print "                </a>";
                print "            </p>";
                print "        </div>";
                found = 0;
            }
        }
    } else {
        print $0;
    }
}
' templates/ozempic_weight_loss_calculator.html > "$tmp_file"

# Replace the original file with the modified content
mv "$tmp_file" templates/ozempic_weight_loss_calculator.html
chmod 644 templates/ozempic_weight_loss_calculator.html

echo "Updated Ozempic calculator template"
