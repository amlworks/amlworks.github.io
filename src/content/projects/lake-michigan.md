# Lake Michigan Precipitation Forecasting

A hybrid deep learning model combining CNN and RNN-LSTM layers to predict precipitation patterns over Lake Michigan using satellite imagery and meteorological data.

## The Challenge

Lake-effect precipitation is notoriously difficult to predict. The interaction between cold air masses and relatively warm lake water creates complex weather patterns that traditional models struggle with. Accurate forecasting matters for agriculture, transportation, and public safety across the Great Lakes region.

## The Approach

We built a hybrid model that combines the spatial pattern recognition of CNNs with the temporal sequence modeling of RNNs. The architecture uses Conv3D layers to capture spatial features across time, then feeds those features into LSTM layers to model temporal dependencies.

The key insight: precipitation patterns aren't just spatial or temporal — they're spatiotemporal. You need to understand both how patterns look and how they evolve.

## Data Sources

We worked with:
- GOES-16 satellite imagery (visible, infrared, water vapor channels)
- NOAA meteorological data (temperature, pressure, humidity, wind)
- Historical precipitation records from weather stations
- Lake surface temperature data

The dataset covered three years of observations, with hourly temporal resolution and 2km spatial resolution.

## Model Architecture

**Spatial Feature Extraction**: Conv3D layers process sequences of satellite images, learning to recognize cloud patterns, temperature gradients, and moisture distributions.

**Temporal Modeling**: LSTM layers capture how these patterns evolve over time, learning the dynamics of lake-effect systems.

**Fusion Layer**: Combines spatial features with point meteorological data (temperature, pressure, wind speed).

**Output**: Precipitation probability and intensity for the next 6, 12, and 24 hours.

## Technical Challenges

**Data Volume**: Satellite imagery at high temporal and spatial resolution generates massive datasets. We used data augmentation and smart sampling to make training tractable.

**Class Imbalance**: Most hours don't have precipitation. We used weighted loss functions and oversampling of precipitation events.

**Validation**: Weather prediction requires careful validation. We used temporal cross-validation to ensure the model wasn't just memorizing patterns.

## Results

The model achieved:
- 78% accuracy for 6-hour precipitation forecasts
- 71% accuracy for 12-hour forecasts
- 64% accuracy for 24-hour forecasts

More importantly, it outperformed baseline models (persistence, linear regression, standard CNN) by 12-15% across all time horizons.

## What We Learned

**Domain knowledge matters.** Understanding lake-effect meteorology helped us design better features and interpret model behavior. The model learned to focus on the same patterns meteorologists look for.

**Temporal validation is crucial.** Early versions had impressive accuracy on random train/test splits but failed on temporal splits. The model was memorizing seasonal patterns, not learning dynamics.

**Interpretability helps.** We added attention visualization to understand what the model was focusing on. This helped us identify when it was making mistakes and why.

## Real-World Impact

The model has been tested by meteorologists at NOAA's Great Lakes Environmental Research Laboratory. While not yet in operational use, it's shown promise as a tool to complement existing forecasting systems.

## Future Work

We're exploring:
- Extending to other Great Lakes
- Incorporating radar data
- Ensemble methods combining multiple models
- Real-time deployment for operational forecasting

## Tech Stack

- Python for data processing and modeling
- TensorFlow/Keras for deep learning
- NumPy and Pandas for data manipulation
- Matplotlib and Seaborn for visualization
- GOES-16 satellite data via NOAA APIs

> "The best models are the ones that teach you something about the problem, not just solve it."