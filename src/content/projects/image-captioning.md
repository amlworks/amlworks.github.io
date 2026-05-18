# Image Captioning with COCO

A multimodal learning experiment that generates natural language descriptions of images using the COCO dataset. Exploring the intersection of computer vision and language modeling.

## The Challenge

Describing an image in natural language requires understanding both what's in the image and how to express that understanding in coherent sentences. It's a fundamentally multimodal problem — you need vision to see and language to speak.

This project explores how neural networks can bridge these two modalities.

## The COCO Dataset

COCO (Common Objects in Context) contains over 200,000 images with human-written captions. Each image has multiple captions describing the same scene in different ways.

Example:
- Image: A person riding a bicycle on a city street
- Caption 1: "A man rides his bike down a busy street"
- Caption 2: "A cyclist navigates through urban traffic"
- Caption 3: "Person on bicycle in city environment"

This variety teaches the model that there are many valid ways to describe the same scene.

## Model Architecture

The approach uses an encoder-decoder architecture:

**Encoder (Vision)**: A pre-trained CNN (ResNet or VGG) extracts visual features from the image. These features capture what objects are present, their spatial relationships, and the overall scene context.

**Decoder (Language)**: An LSTM network generates captions word by word, conditioned on the visual features. At each step, it predicts the next word based on the image features and the words generated so far.

**Attention Mechanism**: The decoder learns to focus on different parts of the image when generating different words. When describing "bicycle," it attends to the bicycle region. When describing "street," it attends to the background.

## Training Process

1. **Feature Extraction**: Pass images through the pre-trained CNN to get feature vectors
2. **Caption Encoding**: Convert text captions to sequences of word embeddings
3. **Training**: Teach the LSTM to predict the next word given image features and previous words
4. **Evaluation**: Generate captions for held-out images and compare to human captions

Metrics used:
- BLEU score (measures n-gram overlap with reference captions)
- METEOR (accounts for synonyms and paraphrasing)
- CIDEr (consensus-based metric designed for image captioning)

## Results

The model learned to generate reasonable captions for common scenes:
- "A dog playing with a frisbee in a park"
- "A group of people sitting at a table eating"
- "A train traveling down tracks near a station"

It struggled with:
- Rare objects or unusual compositions
- Fine-grained distinctions (types of birds, specific breeds)
- Abstract concepts or emotions

## What I Learned

**Multimodal learning is hard.** Aligning vision and language requires the model to learn a shared representation space. This is non-trivial and requires careful architecture design.

**Pre-training matters.** Using a pre-trained vision model (trained on ImageNet) gave much better results than training from scratch. Transfer learning is powerful.

**Evaluation is subjective.** Automatic metrics like BLEU don't always correlate with human judgments of caption quality. A caption can be factually correct but awkwardly phrased, or fluent but inaccurate.

## Interesting Observations

The attention mechanism revealed what the model "looks at" when generating each word. Sometimes it made sense (looking at the dog when saying "dog"). Sometimes it was surprising (attending to background context when describing actions).

The model also learned some biases from the training data. It was more likely to describe men as "playing sports" and women as "standing" or "posing," reflecting biases in the COCO dataset itself.

## Future Directions

- Experiment with transformer-based architectures (CLIP, BLIP)
- Try different attention mechanisms
- Fine-tune on domain-specific images
- Explore controllable generation (generate captions with specific styles or focus)

## Tech Stack

- Python & PyTorch
- Pre-trained ResNet for vision
- LSTM for language generation
- COCO dataset API
- Jupyter notebooks for experimentation

> "The goal is not to build a system that can describe images. The goal is to understand how vision and language connect."