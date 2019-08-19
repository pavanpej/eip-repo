# EIP3 Assignment 1C

> Pavan Ramachandra Rao
>
> Batch 1
>
> pavanpej@gmail.com



---



## 1. Convolution



**“Convolution”** has a few different meanings pertaining to the field it is being used in. In medicine, it is mostly referred to, when one talks about the **brain**, whereas in math, it is used to refer to a mathematical operation carried out on two different functions where it shows how **one function affects the output of the other function** and vice versa. It is essentially **mapping** one over another to give a third output (in a sense).



![2D Convolution](https://cdn-images-1.medium.com/max/1000/1*Zx-ZMLKab7VOCQTxdZ1OAw.gif)



*Image Source: Irhum Shafkat, towardsdatascience.com*



---



## 2. Filters / Kernels



When we say “filters”, what comes to mind is a thing that prevents part of an object (or sets of objects) to pass through, while others stay behind. While this is essentially correct, in image processing, filters are usually used on images to *filter-out* certain features, and allow only some desirable features to pass on through (which may later be used in further processing using neural networks or computer vision software).

|                                               |      |                                                  |
| :-------------------------------------------: | ---- | :----------------------------------------------: |
|                  Blur filter                  | vs.  |                  Sharpen filter                  |
| ![](https://i.ibb.co/p6HQLqk/blur-filter.jpg) |      | ![](https://i.ibb.co/hBmf3Fg/sharpen-filter.jpg) |
|                                               |      |                                                  |

![Filter](https://blog.xrds.acm.org/wp-content/uploads/2016/06/Figure_2.png)

*Image source: [XRDS ACM Blog](https://blog.xrds.acm.org/2016/06/convolutional-neural-networks-cnns-illustrated-explanation/)*



---



## 3. Epochs



Traditionally, an **“epoch”** has been defined as a measure of time which spans an **era** where some significant event has occurred. In terms of neural networks, an “epoch” we refer to *how much data is processed in an interval of time.* Basically,

- **1 Iteration**: is when **one piece of data** (not the entire thing) has finished processing (forward + backward propagation).
- **1 Epoch**: is when the data set has been processed **once** in its **entirety**.

Running your CNN for multiple epochs is important as the dataset is randomized every time, so you can test the validation accuracy correctly.



---



## 4. *1x1* Convolution



Filters are used to obtain only the “features” or “channels” that we need, where we obtain multiple images which are subsets of the original (containing filtered channels). If we use many filters, we have multiple images with different channels. ***1x1* convolution** is essentially used to *compress* all those versions to get a new version of all those new images so that not much processing is required for all those new images in further stages of image processing.

![1x1 Convolution](https://raw.githubusercontent.com/iamaaditya/iamaaditya.github.io/master/images/conv_arithmetic/full_padding_no_strides_transposed_small.gif)

*Image source: [Aditya Prakash’s Blog on DL](https://iamaaditya.github.io/2016/03/one-by-one-convolution/)*



---



## 5. *3x3* Convolution



For convolution in image processing (especially in neural networks), **filters** are used to obtain only the features (or channels) that is needed and others are discarded. Over time, and as researchers got experienced, it was observed that ***3x3* filters** give the best response with respect to propagation of features further (I’m being very specific to neural networks here!), when compared to other filters such as *2x2 (too less features)* or *5x5* or *7x7.*

![3x3 Convolution](https://raw.githubusercontent.com/iamaaditya/iamaaditya.github.io/master/images/conv_arithmetic/full_padding_no_strides_transposed.gif)

*Image source: [Aditya Prakash’s Blog on DL](https://iamaaditya.github.io/2016/03/one-by-one-convolution/)*



---



## 6. Feature Maps



Feature Maps are results of kernels convolving on images. Convolution over images produces results containing only the features that we want propagated forward (i.e, further in forward prop in the neural network). At different layers, we find different levels of features, **low level features** (lines, curves) are closer to input and **high level features** (parts of objects) are closer to the output. Upon visualization, this gives us a sense of *what features are being propagated forward*.

![Feature Map Animation](https://cdn-images-1.medium.com/max/1000/1*VVvdh-BUKFh2pwDD0kPeRA@2x.gif)

*Image Source: [Towards Data Science Article by Arden Dertat](https://towardsdatascience.com/applied-deep-learning-part-4-convolutional-neural-networks-584bc134c1e2)*



---



## 7. Feature Engineering (older computer vision concept)



“Feature Engineering” is a the term for the process of first processing the images, and then extracting the necessary features *(such as curves, lines, points, etc.)* required for the task at hand. This was done earlier by Computer Vision scientists who possessed expert domain knowledge, and often took a lot of time.

When Deep Learning algorithms started prevailing in feature extraction due to higher efficiencies, feature engineering in Computer Vision became obsolete.

![Filters being learned](https://cs.nyu.edu/~yann/research/deep/images/ff1.gif)

**Fig:** Filters for feature extraction being learned here.

*Image Source: [Yann LeCun’s page.](https://cs.nyu.edu/~yann/research/deep/)*



---



## 8. Activation Function



In neural network architecture, an **activation function** is similar to a deciding factor in the neuron of a brain. It decides whether the input is worthy of being passed down, and if so, it gets activated. This is done using mathematical formulae which are standard. Just like the brain, we can use the same activation functions for all layers (or some layers) in the network.

The types are:

- Sigmoid
- tanh
- ReLU
- Leaky ReLU

|                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Sigmoid ![](https://missinglink.ai/wp-content/uploads/2018/11/sigmoidlogisticgraph.png) | Tanh                   ![](https://missinglink.ai/wp-content/uploads/2018/11/tanhhyperbolic.png) |
| ReLU ![](https://missinglink.ai/wp-content/uploads/2018/11/relu.png) | Leaky ReLU ![](https://missinglink.ai/wp-content/uploads/2018/11/leakyrelu.png) |



---



## 9. How to create an account on GitHub and upload a sample project



1. Go to https://github.com/join.

1. Enter details:

   ![](https://i.ibb.co/C6YXGVc/github-1.jpg)

1. Select plan.
   

   ![](https://i.ibb.co/XYxfvwz/github-2.jpg)
   

1. Then create new repository.
   ![](https://i.ibb.co/1dGxzXn/github-3.jpg)

1. Enter repository name.

   ![](https://help.github.com/assets/images/help/repository/create-repository-name.png)
   

1. Add description for that repository (optional, although recommended).
   ![](https://help.github.com/assets/images/help/repository/create-repository-desc.png)

1. Choose visibility of your repository.
   ![](https://help.github.com/assets/images/help/repository/create-repository-public-private.png)

1. Initialize repository with a README.md file (detailed description of your repository).

   ![](https://help.github.com/assets/images/help/repository/create-repository-init-readme.png)
   

1. After that, click **Create repository**.

1. Then, upload some project files. Select **“upload an existing file”**.

   ![](https://i.ibb.co/RBL8hV7/github-41.jpg)
   

1. After that, drag and drop some files, and **“commit”** your changes.

   ![](https://i.ibb.co/88yBYxV/github-4.jpg)

   12. Congratulations, you now have a GitHub project with some files in it.



---



## 10. Receptive Field



CNNs are used mostly where the input is mainly images. It would be infeasible to connect all neurons between two layers like in ANNs, as the size of the data at each layer is huge. This is why CNNs use something called “receptive fields”.

**Receptive fields** are small regions (3x3, 5x5). Not all features in this region are carried forward, but some are, through kernels and pooling layers, so that only the required data is “visible” even from the furthest (output) layer.



![Receptive Field](https://cdn-images-1.medium.com/max/1500/1*mModSYik9cD9XJNemdTraw.png)

*Image Source: [Article by Dang Ha The Hien](https://medium.com/mlreview/a-guide-to-receptive-field-arithmetic-for-convolutional-neural-networks-e0f514068807)*



---

