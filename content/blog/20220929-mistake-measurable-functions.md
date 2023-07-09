---
author: Qifan
title: A Mistake on Composition of Measurable Function
date: "2022-09-29"
description: This article is about a mistake I made on composition of measurable function. 
math: true
tags: 
  [
    "measure-theory",
    "mathematics"
]
---

In abstract measure theory, we have one proposition about the composition of measurable function. Suppose $(\Omega_1,\Sigma_1)$, $(\Omega_2,\Sigma_2)$ and $(\Omega_3,\Sigma_3)$ are measurale spaces, and $f:(\Omega_1,\Sigma_1) \rightarrow (\Omega_2,\Sigma_2)$ and $g:(\Omega_2,\Sigma_2) \rightarrow (\Omega_3,\Sigma_3)$ are measurable functions. Then $g\circ f$ is a measurable function from $(\Omega_1,\Sigma_1)$ to $(\Omega_3,\Sigma_3)$.

The proof of this proposition is trivial. But one thing confused me: in Lebesgue measure theory, we have a proposition that **composition of a real-valued continuous function and a real-valued measurable function is measurable** but the opposite (composition of a measurable function and a continuous function is measurable) is not right. The counterexample can be constructed using Cantor function and Vitali Set. This seems to contradict the above proposition since continuous functions are measurable. Where is the mistake?

Let's review theory on Lebesgue measure to find the mistake. The definition of Lebesgue measurable function is


Given a measurable space $(\Omega, \Sigma)$ and a topological space $(U,\tau)$. A function $f$ is measurable if $\forall A \in \tau$, $f^{-1}(A) \in \Sigma$.

In $\mathbb{R}$, its topology is the collection of all open interval. Thus the above definition is the same as using Boreal field to define measurable functions from $(\Omega, \Sigma)$ to $(\mathbb{R}, \mathcal{B(\mathbb{R})})$. Lebesgue measurable function (one dimension) means the domain of the measurable function is Lebesgue measurable space $(\mathbb{R}, \mathcal{L})$. Obviously, a continuous function on $\mathbb{R}$ is a Lebesgue measurable function. Let's make it clearer here. Let $f$ be the Lebesgue measurable function and $g$ be the continuous function. Then

$$f:(\mathbb{R}, \mathcal{L}) \rightarrow (\mathbb{R}, \mathcal{B}(\mathbb{R}))$$

$$g:(\mathbb{R}, \mathcal{L}) \rightarrow (\mathbb{R}, \mathcal{B}(\mathbb{R}))$$


The mistake is clear now. The $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ and $(\mathbb{R}, \mathcal{L})$ are not the same thing! This does not satisfy the premise of the proposition! Since $\mathcal{L}$ is a complete $\sigma$-field, it can hide something nasty into any zero measure set. Then the "normal" $\mathcal{B}(\mathbb{R})$ makes it reappear in front of us. 

This mistake confuse me for about 30 minutes. I think next time I should write down every measurable space I use to avoid problems like this. 