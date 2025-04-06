#!/bin/bash

# Update "Try the Female Fertility Calculator" in fertility_after_35.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 15px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 15px;"/' templates/resources/fertility_after_35.html

# Update "Calculate Height Prediction" in are_height_predictors_accurate.html
sed -i 's/class="cta-button" style="display: inline-block; padding: 12px 24px; font-weight: bold; font-size: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; font-size: 16px;"/' templates/resources/are_height_predictors_accurate.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 16px;"/' templates/resources/are_height_predictors_accurate.html

# Update "Calculate Cup Size" in breast_implant_size_guide.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 16px;"/' templates/resources/breast_implant_size_guide.html

# Update "Launch Calculator" and "Try the Calculator" in how_many_ccs_is_a_c_cup.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 16px;"/' templates/resources/how_many_ccs_is_a_c_cup.html

# Update "Calculate Your Results" and "Try the Calculator" in fasting_weight_loss_chart.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 16px;"/' templates/resources/fasting_weight_loss_chart.html

# Update "Calculate Your Treatment" and "Try the Calculator" in botox_dosage_guide.html
sed -i 's/class="cta-button" style="display: inline-block; margin-top: 16px;"/style="background-color: #d63384; color: white; border: none; border-radius: 4px; padding: 10px 20px; font-weight: 500; text-decoration: none; text-align: center; display: inline-block; margin-top: 16px;"/' templates/resources/botox_dosage_guide.html
