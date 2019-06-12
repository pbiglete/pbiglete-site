---
title: Soft Real-Time Task Re-Prioritizer (C / BASH / Raspbian OS)
date: "2018-12-01"
datelocation: "Sep 2018 - Dec 2018 | San Diego State University"
description: "An optimization system that improves OS performance within the Linux user space."
---

## Soft Real-Time Task Re-Prioritizer (C / BASH / Raspbian OS)
#### *Sep 2018 - Dec 2018 | San Diego State University*
#####An optimization system that improves OS performance within the Linux user space.
---
***Embedded Operating Systems & Student Research Symposium 2019 Project*** <br/>
▪ Collaborated and assisted in designing a system to improve operating system performance within the Linux user space.<br/>
▪ Utilized a combination of BASH scripts and C programs to create a system benchmark.<br/>
▪ Analyzed performance metrics to find the impact of ‘nice’ values on Context Switches and Task Completion Time.<br/>
---
[Student Research Symposium 2019 Poster](https://drive.google.com/file/d/1GnGMKPdRjWlj9V0Nuo2QQqRspjWbW2Un/view?usp=sharing)
![TaskRep](./SRS_Poster_FINAL2.png)

***Abstract:*** <br/>
With increasing hardware capabilities and computation needs, today’s embedded systems have become extremely multi-tasked. Although this leads to higher system throughput, the performance of individual tasks might fluctuate beyond desired levels. We aim to find a program’s optimal performance by analyzing a series of user-space tasks running at different priority levels in a Linux operating system. In our research, we have chosen to gauge optimal performance by a task’s total execution time and the number of context switches. The priority levels are determined by the user-space task’s “nice” value within the Linux kernel. With these defined performance values our systematic approach becomes clear: calculate the optimal nice by analyzing the lowest number of context switches and task completion time. In addition, the OS would apply the optimal nice value to the process in real-time while the process is actively running.



