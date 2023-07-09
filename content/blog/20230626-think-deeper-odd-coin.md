---
author: Qifan
title: Think Again - Odd Coin (Defective Ball) Problem
date: "2023-06-26"
description: "Given a set of 12 balls , one of which is defective (it weighs either less or more) . You are allow to weigh 3 times to find the defective and also tell which weighs less or more."   
math: true
tags: 
  - "quant"
  - "brain-teaser"
---

> Given a set of 12 balls , one of which is defective (it weighs either less or more) . You are allow to weigh 3 times to find the defective and also tell which weighs less or more.

The above is a question on *A Practical Guid to Quantitative Finance Interview*. The book gives a more general answer to this book without any explanation -- you can identify the defective ball among up to $(3^n - 3) / 2$ balls using no more than $n$ measurements. To understand how to derive this formula, first we need to formulate an algorithm to solve the defective ball problem. [This author](http://www.cut-the-knot.org/blue/OddCoinProblems.shtml) provides a very beautiful idea.

We first consider a simple case i.e. we know whether the defective ball is heavier or lighter in advance. In this case, we can identify the defective ball among up to $3^n$ balls using no more than $n$ measurements. Why? Because we can first split the balls into 3 groups with the same number of balls and then place two of them on the pans of the balance. The result of the weight can help us reduce the problem size by $2/3$. Thus we only need to consider the exactly same type of questions of size $3^n,3^{n-1},\cdots,3,1$ in sequence. 

Now we try to reduce the original problem to the above simplified one. To achieve this, we need to reduce the bag of balls to the one with identifier "heavier" or "lighter". [The author](http://www.cut-the-knot.org/blue/OddCoinProblems.shtml) proposed a rotation method. In this article, we only consider its general form. Suppose that now we have $(3^n - 3) / 2$ balls. We first divide the balls into 3 groups of $(3^{n-1} - 1) / 2$ balls, labeled as A,B and C respectively. Next, we divide the balls within each group into $n-1$ bags of size $1/3/3^2/\cdots/3^{n-2}$. We weigh A and B on the balance and place C on the table. This is the first weighing. Then we rotate the bags of $3^{n-2}$ balls, moving the one from the right pan to the table, the one from the left pan to the right pan and the one from the table onto the left pan. If the condition of the balance changes, it indicates which bags the defective ball belongs to and whether it is heavier or lighter. (Why? Consider a simple case and write down the transition table.) Then the problem is reduced to the simple case of $3^{n-2}$ balls which requires $n-2$ measurements. So in total, we need $n$ measurements. If the condition doesn't change, we rotate the bags of $3^{n-3}$ balls and repeat the actions above. We can prove that this process always requires $n$ measurements since if the condition of the balance changes when rotating the bags of $3^{n-k}$ balls, we need $k + n - k$ measurements.