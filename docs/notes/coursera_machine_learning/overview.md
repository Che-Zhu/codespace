# Overview
Machine learning is a field of study that gives computers the ability to learn without being explicitly programmed.

## Definition
A computer is said to learn from experience `E` with respect to some tasks `T` and some performance measure `P`, if its performance on `T`, as measured by `P`, improves with experience `E`.

**Example 1**

> Suppose your email program watches which emails you do or do not mark as spam, and based on that learns how to better filter spam.

In this example, the program learns from experience `E` (email program watching me label emails as spam or not spam), the task `T` is to let program better filter spams, and the performance `p` is measured by the number of emails it correctly classified as spam/not spam.

**Example 2**
> Playing checkers

`E` = The experience of playing many games of checkers

`T` = The task of playing checkers

`P` = The probability that the program will win the next game

## Supervised Learning
In supervised learning, we are given a data set and already know what our correct output should look like, having the idea that there is a relationship between the input and the output.

Supervised learning problems are categorized into `regression` and `classification` problems.

**Regression Problem**

In a regression problem, we are trying to predict results within a continuous output, meaning that we are trying to map input variables to some continous function.

**Example 1**
> Given data about the size of houses on the real estate market, try to predict their price. Price as a function of size is a continuous output, so this is a regression problem.

**Example 2**
> Given a picture of a person, to predict their age on the basis of the given picture.

**Classification Problem**

In a classification problem, we are tying to predict results in a discrete output. In other words, we are trying to map input variables into discrete categories.

**Example 1**
> Given data about the size of houses on the real estate market, classify our output by telling whether the house "sell for more or less than the asking price".

**Example 2**
> Given a patient with a tumor, to predict whether the tumor is malignant or benign.

## Unsupervised Learning
Unsupervised learning allows us to approach problems with little or no idea what our results should look like. We can derive strcuture from data where we don't necessarily know the effect of the variables.

We can derive this structure by clustering the data based on relationships among the variables in the data.

::: tip
With unsupervised learning there is no feedback based on the prediction results.
:::

**Example**
> Clustering: take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles and so on.




