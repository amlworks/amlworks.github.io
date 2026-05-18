# Modified NanoGPT

A research fork of Andrej Karpathy's NanoGPT, exploring custom activation functions in language model training. This project investigates whether `ReLU(x) * ReLU(y)` can improve model performance compared to standard activations.

## The Motivation

Language models have become incredibly powerful, but most of the architectural innovations happen at large research labs. I wanted to understand these systems from the inside — not just use them, but modify them and see what happens.

NanoGPT is perfect for this. It's small enough to train on consumer hardware, but sophisticated enough to demonstrate real language modeling capabilities. The codebase is clean, well-documented, and designed for experimentation.

## The Experiment

Standard neural networks use activation functions like ReLU, GELU, or SiLU. These are well-studied and work reliably. But what if we tried something different?

The idea: instead of a single activation function, use a multiplicative combination: `ReLU(x) * ReLU(y)`. This creates a gating mechanism where both inputs need to be positive for the output to be non-zero.

Hypothesis: This might help the model learn more selective feature combinations, potentially improving its ability to capture complex patterns in language.

## Implementation

The changes were surgical:
- Modified the feedforward layer in the transformer block
- Added a second linear projection for the gating mechanism
- Kept everything else identical to baseline NanoGPT
This isolation is important. If performance changes, we know it's due to the activation function, not some other architectural difference.

## Training Setup

- Dataset: OpenWebText (a reproduction of GPT-2's training data)
- Model size: ~10M parameters
- Training: Single GPU, ~24 hours
- Evaluation: Perplexity on held-out validation set

## Results

The modified activation showed:
- Slightly slower convergence in early training
- Comparable final perplexity to baseline
- Interesting attention pattern differences (visualized in the repo)

Not a breakthrough, but a valuable learning experience. The model learned to use the gating mechanism in specific ways — some layers used it heavily, others barely at all.

## What I Learned

**Systems thinking matters.** Language model training isn't just about the architecture — it's about data pipelines, checkpointing, monitoring, debugging. Getting all of this working taught me more than any tutorial could.

**Baselines are hard to beat.** There's a reason standard activations are standard. They've been optimized over thousands of experiments. Beating them requires either a fundamental insight or extensive hyperparameter tuning.

**Small experiments compound.** This project gave me the confidence to modify other parts of the architecture. Each experiment builds intuition for the next one.

## Future Directions

- Try the same idea with different gating functions
- Test on different model sizes
- Investigate why certain layers use the gate more than others
- Combine with other architectural modifications

## Tech Stack

- Python & PyTorch
- NanoGPT codebase
- Weights & Biases for experiment tracking
- Custom visualization scripts

> "The best way to understand a system is to try to change it."