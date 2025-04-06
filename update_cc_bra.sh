#!/bin/bash

# Create a temporary file
tmp_file=$(mktemp)

# Process the file
awk '
BEGIN { found = 0; }
{
    if (!found && $0 ~ /<div id="result" class="result" style="display: none;">/) {
        found = 1;
        print_count = 0;
    }

    if (found) {
        print $0;
        if ($0 ~ /<\/div>/) {
            print_count++;
            if (print_count == 2) {
                print "        ";
                print "        <div class=\"highlight\" style=\"margin-top: 40px; background-color: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 4px solid #d63384;\">";
                print "            <h3>📘 Related Guide</h3>";
                print "            <p>";
                print "                Want a full breakdown on CC to cup size conversions, implant charts, and sizing tips?";
                print "                <a href=\"/resources/breast-implant-size-guide\" style=\"color: #d63384; text-decoration: none; font-weight: 500;\">";
                print "                    Read the full breast implant size guide →";
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
' templates/cc_to_bra_size_calculator.html > "$tmp_file"

# Replace the original file with the modified content
mv "$tmp_file" templates/cc_to_bra_size_calculator.html
chmod 644 templates/cc_to_bra_size_calculator.html

echo "Updated CC to Bra Size calculator template"
