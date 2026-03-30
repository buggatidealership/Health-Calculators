
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

// Pages 
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import LongevityCalculatorPage from './pages/LongevityCalculatorPage';
import RetirementCalculator from './pages/RetirementCalculator';
import FertilityCalculator from './pages/FertilityCalculator';
import BaldnessRiskCalculatorPage from './pages/BaldnessRiskCalculatorPage';
import AdultHeightPredictorPage from './pages/AdultHeightPredictorPage';
import GrowthPercentilePage from './pages/GrowthPercentilePage';
import BreastImplantCalculatorPage from './pages/BreastImplantCalculatorPage';
import MetabolismCalculatorPage from './pages/MetabolismCalculatorPage';
import AlcoholCalculatorPage from './pages/AlcoholCalculatorPage';
import BotoxCalculatorPage from './pages/BotoxCalculatorPage';
import TDEECalculatorPage from './pages/TDEECalculatorPage';
import MacronutrientCalculatorPage from './pages/MacronutrientCalculatorPage';
import IdealBodyWeightCalculatorPage from './pages/IdealBodyWeightCalculatorPage';
import VitaminDCalculatorPage from './pages/VitaminDCalculatorPage';
import CreatineWaterCalculatorPage from './pages/CreatineWaterCalculatorPage';
import OzempicWeightLossCalculatorPage from './pages/OzempicWeightLossCalculatorPage';
import IdealProteinIntakeCalculatorPage from './pages/IdealProteinIntakeCalculatorPage';
import IdealProteinIntakeCalculator2Page from './pages/IdealProteinIntakeCalculator2Page';
import HomepageTest from './pages/HomepageTest';
import HomepageIntegrateTest from './pages/HomepageIntegrateTest';
import BasalMetabolicRateGuidePage from './pages/BasalMetabolicRateGuidePage';
import BasalMetabolicRateGuide2Page from './pages/BasalMetabolicRateGuide2Page';
import BasalMetabolicRateGuide3Page from './pages/BasalMetabolicRateGuide3Page'; // Add this import

// Static Pages
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Resource Pages
import Resources from './pages/resources';
import HowToBoostYourMetabolism from './pages/resources/how-to-boost-your-metabolism';
import IncreaseLifeExpectancy from './pages/resources/how-to-increase-life-expectancy';
import FertilityAfter35 from './pages/resources/fertility-after-35';
import HowMuchToSaveForRetirement from './pages/resources/how-much-to-save-for-retirement';
import SaveForRetirementLowIncome from './pages/resources/save-for-retirement-low-income';
import BreastImplantSizeGuide from './pages/resources/breast-implant-size-guide';
import HowToUseYourBMI from './pages/resources/how-to-use-your-bmi';
import AdultHeightPredictionGuide from './pages/resources/adult-height-prediction-guide';
import BotoxDosageGuide from './pages/resources/botox-dosage-guide';
import AlcoholAndLongevity from './pages/resources/alcohol-and-longevity';
import WillIGoBald from './pages/resources/will-i-go-bald';
import HowToPredictYourChildsHeight from './pages/resources/how-to-predict-your-childs-adult-height';
import HowToCalculateYourTDEE from './pages/resources/how-to-calculate-your-tdee';
import MacronutrientCalculatorGuide from './pages/resources/macronutrient-calculator-guide';
import IdealBodyWeightGuide from './pages/resources/ideal-body-weight-guide';
import OzempicWeightLossCalculatorGuide from './pages/resources/ozempic-weight-loss-calculator-guide';
import FurnitureReelsPage from './pages/FurnitureReelsPage';

function App() {
  useEffect(() => {
    // Load scripts that might be used for analytics or other purposes
    const script = document.createElement('script');
    script.src = '/loader.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Test Homepage Routes */}
        <Route path="/homepage-test" element={<HomepageTest />} />
        <Route path="/homepage-integrate-test" element={<HomepageIntegrateTest />} />
        
        {/* Calculator Pages */}
        <Route path="/life-expectancy-calculator" element={<LongevityCalculatorPage />} />
        <Route path="/retirement-savings-calculator" element={<RetirementCalculator />} />
        <Route path="/female-fertility-calculator" element={<FertilityCalculator />} />
        <Route path="/baldness-risk-calculator" element={<BaldnessRiskCalculatorPage />} />
        <Route path="/adult-height-predictor-calculator" element={<AdultHeightPredictorPage />} />
        <Route path="/ideal-protein-intake-calculator" element={<IdealProteinIntakeCalculatorPage />} />
        <Route path="/ideal-protein-intake-calculator-2" element={<IdealProteinIntakeCalculator2Page />} />
        
        {/* Growth Percentile Calculator Routes - Make /growth the primary route */}
        <Route path="/growth" element={<GrowthPercentilePage />} />
        {/* Redirect alternate URLs to the canonical /growth path */}
        <Route path="/growth-percentile-calculator" element={<Navigate to="/growth" replace />} />
        <Route path="/child-growth-percentile-calculator" element={<Navigate to="/growth" replace />} />
        
        {/* Breast Implant Calculator Routes - Make /breast-implant-calculator the primary route */}
        <Route path="/breast-implant-calculator" element={<BreastImplantCalculatorPage />} />
        {/* Redirect alternate breast implant URLs to the canonical path */}
        <Route path="/breastimplant" element={<Navigate to="/breast-implant-calculator" replace />} />
        <Route path="/breast-implant-size-calculator" element={<Navigate to="/breast-implant-calculator" replace />} />
        
        {/* Metabolism Calculator */}
        <Route path="/metabolism-calculator" element={<MetabolismCalculatorPage />} />
        
        {/* Alcohol Calculator Routes - Make /alcohol the primary route */}
        <Route path="/alcohol" element={<AlcoholCalculatorPage />} />
        {/* Redirect alternate alcohol calculator URLs to canonical path */}
        <Route path="/alcohol-lifespan-calculator" element={<Navigate to="/alcohol" replace />} />
        <Route path="/alcohol-impact-calculator" element={<Navigate to="/alcohol" replace />} />
        
        {/* Botox Calculator Routes - Make /botox-dosage-calculator the primary route */}
        <Route path="/botox-dosage-calculator" element={<BotoxCalculatorPage />} />
        {/* Redirect alternate botox calculator URLs to canonical path */}
        <Route path="/botox" element={<Navigate to="/botox-dosage-calculator" replace />} />
        <Route path="/botox-calculator" element={<Navigate to="/botox-dosage-calculator" replace />} />
        
        <Route path="/tdee-calculator" element={<TDEECalculatorPage />} />
        <Route path="/macronutrient-calculator" element={<MacronutrientCalculatorPage />} />
        <Route path="/ideal-body-weight-calculator" element={<IdealBodyWeightCalculatorPage />} />
        <Route path="/vitamin-d-calculator" element={<VitaminDCalculatorPage />} />
        <Route path="/creatine-water-calculator" element={<CreatineWaterCalculatorPage />} />
        <Route path="/ozempic-weight-loss-calculator" element={<OzempicWeightLossCalculatorPage />} />
        
        {/* Resource Pages */}
        <Route path="/basal-metabolic-rate-guide" element={<BasalMetabolicRateGuidePage />} />
        <Route path="/basal-metabolic-rate-guide-2" element={<BasalMetabolicRateGuide2Page />} />
        <Route path="/basal-metabolic-rate-guide-3" element={<BasalMetabolicRateGuide3Page />} /> {/* Add this route */}
        <Route path="/basal-metabolic-rate-explained" element={<Navigate to="/basal-metabolic-rate-guide-2" replace />} />
        
        {/* Static Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        
        {/* Resource Pages */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/how-to-boost-your-metabolism" element={<HowToBoostYourMetabolism />} />
        <Route path="/resources/how-to-increase-life-expectancy" element={<IncreaseLifeExpectancy />} />
        <Route path="/resources/fertility-after-35" element={<FertilityAfter35 />} />
        <Route path="/resources/how-much-to-save-for-retirement" element={<HowMuchToSaveForRetirement />} />
        <Route path="/resources/save-for-retirement-low-income" element={<SaveForRetirementLowIncome />} />
        <Route path="/resources/breast-implant-size-guide" element={<BreastImplantSizeGuide />} />
        <Route path="/resources/how-to-use-your-bmi" element={<HowToUseYourBMI />} />
        <Route path="/resources/adult-height-prediction-guide" element={<AdultHeightPredictionGuide />} />
        <Route path="/resources/botox-dosage-guide" element={<BotoxDosageGuide />} />
        <Route path="/resources/alcohol-and-longevity" element={<AlcoholAndLongevity />} />
        <Route path="/resources/will-i-go-bald" element={<WillIGoBald />} />
        <Route path="/resources/how-to-predict-your-childs-adult-height" element={<HowToPredictYourChildsHeight />} />
        <Route path="/resources/how-to-calculate-your-tdee" element={<HowToCalculateYourTDEE />} />
        <Route path="/resources/macronutrient-calculator-guide" element={<MacronutrientCalculatorGuide />} />
        <Route path="/resources/ideal-body-weight-guide" element={<IdealBodyWeightGuide />} />
        <Route path="/resources/ozempic-weight-loss-calculator-guide" element={<OzempicWeightLossCalculatorGuide />} />
        
        {/* 404 Page */}
        <Route path="/furniture-reels" element={<FurnitureReelsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
