#!/bin/bash

files=(
    "templates/resources/fertility_after_35.html"
    "templates/resources/ozempic_weight_loss_calculator_guide.html"
    "templates/resources/are_height_predictors_accurate.html"
    "templates/resources/breast_implant_size_guide.html"
    "templates/resources/how_many_ccs_is_a_c_cup.html"
    "templates/resources/fasting_weight_loss_chart.html"
    "templates/resources/botox_dosage_guide.html"
)

for file in "${files[@]}"; do
    echo "Processing $file..."
    sed -i 's/class="cta-button" style="white-space: nowrap; margin-left: 20px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; white-space: nowrap; margin-left: 20px; display: inline-block;"/' "$file"
done

echo "All files updated."
