# Causal Map — Inference Eclipses Training

**Last updated:** 2026-05-20
**Trigger:** Inference compute share exceeds training compute share in hyperscaler workloads (anticipated 2026 H2)

## TL;DR

If inference dominates compute spending, the trade shifts from "biggest GPU wins" to "lowest cost-per-token wins." Custom silicon, efficient inference architectures, and observability all re-price up. This is mostly the S2 scenario from `scenarios.md` playing out.

## 1st order (P > 80%)

- Total compute spend dollars allocated to inference >50% of stack (was ~30%)
- Cost-per-token becomes the dominant procurement metric
- Throughput at acceptable latency replaces raw FLOPS as the benchmark
- Inference SLA reliability requirements rise (4–5 nines, not 3)

**Direct beneficiaries:** chip architectures optimized for inference (Blackwell Ultra, MI355/MI400, TPU v6/v7, Trainium 2/3)

## 2nd order (P ~60%)

### Custom silicon takes meaningful share of inference
- Hyperscalers prove out TPU/Trainium/Maia for inference at scale (cheaper than NVDA at sustained load)
- Inference workloads more amenable to fixed-purpose silicon than training
- 25–35% of inference moves to custom Si by 2027
- **Beneficiaries:** AVGO (Google TPU partner), MRVL (AWS, Meta), GOOG/AMZN/META as their own customers
- **Mixed for NVDA:** still grows in absolute, but share + pricing pressure

### Inference clouds get repriced
- Token-as-a-service economics matter; bare GPU rental gets commoditized
- Differentiation moves to throughput optimizations, batching, KV-cache, model serving
- **Beneficiaries:** vertically integrated inference clouds with optimization moats; commodity GPU rental margins compress

### Model serving + KV-cache optimization becomes an investable layer
- Software optimization for inference (vLLM, TensorRT-LLM, custom kernels) becomes value-creating
- Open-source projects + niche commercial companies emerge
- **Beneficiaries:** harder to invest in directly via public markets; watch for IPO candidates

### Memory bandwidth + capacity premium grows
- Long-context inference + KV-cache pressure = more HBM per chip + premium DDR
- HBM4 ramp accelerated
- **Beneficiaries:** MU, SK Hynix, Samsung (memory)

## 3rd order (P ~40%)

### NVDA margin compression visible in numbers
- Q/Q gross margin tracks lower as hyperscaler mix grows and custom Si negotiates harder
- 75% non-GAAP → potential drift to 71–73% by 2027 if S2 plays
- Stock multiple compresses even if revenue grows
- **Mixed:** NVDA absolute earnings still grow but valuation compresses

### Hyperscaler bargaining power increases
- They can credibly threaten "we'll just use more custom silicon"
- NVDA pricing power softens on negotiations
- **Beneficiaries:** hyperscalers (better COGS); **casualties:** NVDA pricing

### Power-per-token (efficiency) becomes the primary metric, not just performance
- Custom silicon often beats NVDA on watts-per-token for specific workloads
- Procurement decisions shift weighting toward efficiency
- **Beneficiaries:** GOOG (TPU v6 efficiency), AMZN (Trainium efficiency), NVDA Blackwell efficiency story still strong

### Specialized inference chip startups gain TAM
- Groq, Cerebras, SambaNova, Tenstorrent get more enterprise pilots
- Most are private — but acquisition targets for hyperscalers or NVDA defensively

## 4th order (P ~20%)

### Bring-your-own-inference becomes normal at enterprise
- Enterprises run inference on-prem using mix of NVDA + custom + commodity hardware
- Inference software stack standardization (OpenAI-compatible APIs everywhere)
- **Beneficiaries:** SMCI, DELL, HPE for on-prem inference systems; on-prem stack vendors

### Open-source inference models commoditize the upper layers
- Llama-equivalent open models force commodity pricing at the bottom of the stack
- Closed-source frontier providers (OpenAI, Anthropic) keep premium for highest quality
- Mid-tier closed providers get squeezed

### Inference cost falls 10× → enables new applications
- Cheap inference unlocks workflows that weren't economically viable
- Vertical AI apps + agentic deployments scale faster
- **Beneficiaries:** vertical software (PLTR, NOW), AI-native cos (private)

### Vendor lock-in shifts from chips to model + KV-cache state
- Once an enterprise has KV-cache state + fine-tuned models on a particular chip family, switching costs are real
- NVDA CUDA lock-in dilutes but isn't replaced — it's just no longer the only lock-in
- **Mixed:** model providers gain customer stickiness

## Names whose exposure changes

| Ticker | Order | Direction | Note |
|---|---|---|---|
| NVDA | 1st (W) + 3rd (compress) | Mixed | Wins on volume, loses pricing edge |
| AMD | 1st (W) + 2nd (W) | Bull | MI inference + EPYC both benefit |
| AVGO | 2nd (W) | **Strong bull** | Hyperscaler custom Si partner of choice |
| MRVL | 2nd (W) | Bull | AWS Trainium + Meta MTIA + networking |
| GOOG | 2nd (W) + 3rd (W) | Strong bull | TPU optionality genuinely valuable |
| AMZN | 2nd (W) + 3rd (W) | Strong bull | Trainium + AWS scale |
| META | 2nd (W) | Bull | MTIA + Reels/ads ROI |
| TSM | 1st (W) | Bull | Makes everything regardless of who wins |
| MU | 2nd (W) | Bull | Memory bandwidth premium |
| SMCI/DELL/HPE | 4th (W) | Mild bull | On-prem inference systems |

## Signals confirming this map

1. NVDA gross margin trending below 73% in any single quarter (margin compression visible)
2. AVGO custom-Si revenue line >$20B annualized (was ~$10B in FY25)
3. Hyperscaler earnings disclose custom-Si as separate revenue line ≥10% of compute
4. Inference-specific chip benchmarks become standard in procurement
5. Major enterprise reports "switched X% of inference to custom Si, saved Y%"

## Signals invalidating this map

1. NVDA Blackwell + Rubin efficiency advantage proves so large that custom Si never closes the gap
2. CUDA lock-in re-asserts (rare model architecture innovations that only run well on NVDA)
3. Hyperscaler custom-Si programs hit execution issues (yield, software ecosystem)
