---
layout: "../../layouts/BlogPostLayout.astro"
title: Microsoft Hyper-V - Intro
date: 2022-11-20
author: Darnell McClure
image: {
  src: "/images/post-1.jpg",
  alt: "Microsoft",
}
description: Microsoft Hyper-V - Intro
draft: false
category: Hyper-V
---

Cet article couvre les concepts clés de la virtualisation et approfondir vos connaissances sur Hyper-V, une des solutions de virtualisation les plus prisées.

Nous débuterons par répondre à une question centrale pour introduire le sujet dans son ensemble : "Qu'est-ce que la virtualisation ?" Vous apprendrez comment la virtualisation vous permet de créer plusieurs machines virtuelles sur un seul serveur physique, optimisant ainsi l'utilisation des ressources et simplifiant la gestion des infrastructures informatiques.

Ensuite, nous aborderons l'hyperviseur de Microsoft dans un chapitre intitulé "Hyper-V, c’est quoi ?". Vous découvrirez les caractéristiques propres à cet hyperviseur développé par Microsoft et ses fonctions principales. Enfin, nous éluciderons une question courante : Hyper-V est-il un hyperviseur de type 1 ou type 2 ? Vous distinguerez les différences entre ces deux types d'hyperviseurs et comprendrez où se situe Hyper-V, constatant que la réponse à cette question n'est pas aussi simple qu'elle en a l'air.

Ce module est conçu pour vous fournir une compréhension claire des principes de la virtualisation et d'Hyper-V, vous préparant à explorer les aspects techniques. Préparez-vous à plonger dans l'univers de la virtualisation et de la solution Hyper-V en commençant ce premier module !







Partie 1 : Présentation

En informatique, qu'est-ce que la virtualisation ? Cette notion est indispensable tant cette technologie est devenue incontournable pour la majorité des entreprises.

Pour commencer ce cours, et avant même d'évoquer Hyper-V dans les détails, nous allons commencer par répondre à cette question afin d'introduire le sujet dans sa globalité.

Partie 2 : Définition de la virtualisation
La virtualisation est une technologie qui permet de créer plusieurs environnements virtuels à partir d'un seul matériel physique. Autrement dit, la virtualisation permet de diviser une seule machine physique en plusieurs "machines virtuelles" appelées aussi "VM" pour "Virtual Machine". C'est le cas pour la virtualisation de serveurs évoquée dans ce cours.

Chaque machine virtuelle fonctionne avec son propre système d'exploitation (OS) et ses applications comme s'il s'agissait d'une machine indépendante. Chaque machine virtuelle dispose de ses propres ressources virtuelles définies dans sa configuration : mémoire vive, stockage, réseau, processeur, et autres périphériques virtuels (port USB, lecteur DVD, etc.). Les machines virtuelles sont isolées les unes des autres, mais elles peuvent communiquer entre elles par l'intermédiaire du réseau (si la configuration de ce dernier le permet).

La virtualisation s'appuie sur ce que l'on appelle un hyperviseur, tel qu'Hyper-V qui est celui étudié tout au long de ce cours. Nous pouvons dire que l'hyperviseur agit comme un chef d'orchestre, car il contrôle le matériel et assure la répartition des ressources entre les machines virtuelles. Il existe des hyperviseurs de type 1 et des hyperviseurs de type 2, mais nous aborderons cette notion dans la suite du cours.

L'hyperviseur est installé sur le matériel physique et ce dernier peut être représenté par un serveur informatique, un poste de travail fixe ou encore un ordinateur portable. Ceci dépend notamment de la finalité de l'environnement déployé (production, expérimentation, etc.).


Les premiers pas dans la virtualisation ont été faits par IBM dans les années 1960. Mais, c'est bien au début des années 2000, avec la sortie de l'hyperviseur VMware ESX Server 1.0, que la virtualisation a été démocratisée. La première version d'Hyper-V quant à elle, a été publiée le 28 juin 2008. Au fil des années, les technologies de virtualisation ont évoluées au point de permettre la virtualisation des serveurs (charges de travail), du stockage, ou encore du réseau. La virtualisation des applications est aussi possible, mais c'est un sujet bien à part.

Depuis plus de 15 ans, la virtualisation est omniprésente dans les entreprises, et elle est devenue une technologie clé pour le Cloud Computing. En effet, les fournisseurs de services Cloud tels que Microsoft, Amazon et Google utilisent la virtualisation pour fournir des ressources informatiques à leurs clients.

Ces dernières années, une autre technologie a émergée : les conteneurs. Ils offrent une alternative à la virtualisation telle que nous la connaissons aujourd'hui. L'approche est différente, car le système d'exploitation hôte est partagé avec le conteneur, contrairement à une machine virtuelle.

Partie 3 : Avantages et inconvénients de la virtualisation
La virtualisation a plusieurs avantages :

Optimisation des ressources
Avec la virtualisation, vous pouvez utiliser plus efficacement vos ressources matérielles. Au lieu d'avoir plusieurs serveurs physiques qui n'exploitent qu'une partie de leur capacité (RAM, CPU, disque, etc), vous pouvez consolider vos charges de travail sur moins de serveurs qui sont plus pleinement utilisés. Autrement dit, un hyperviseur peut remplacer X serveurs physiques et ainsi permettre l'optimisation des ressources.

Réduction des coûts
La réduction du nombre de serveurs physiques signifie moins d'énergie électrique consommée et moins d'espace physique nécessaire, ce qui peut avoir son importance dans une salle de serveurs. Le déploiement d'une nouvelle VM est également moins coûteux, car il s'agit simplement d'une brique supplémentaire sur un hyperviseur, ce qui n'implique pas d'investissement.

Isolation
Chaque VM est isolée des autres VM, cela signifie qu'un dysfonctionnement ou une panne sur une VM n'impactera pas directement les autres VM. De la même façon, si une VM est compromise, ceci n'impactera pas directement les autres VMs. De plus, cette isolation rend plus facile le test de nouvelles applications, de nouvelles fonctionnalités, de nouvelles versions d'applications, etc.

Flexibilité et évolutivité
Les VMs peuvent être créées, supprimées, redimensionnées et déplacées d'un hyperviseur à un autre avec beaucoup plus de facilité qu'un système installé sur un hôte physique. De plus, il est beaucoup plus facile de faire, défaire, refaire, et tester en exploitant les ressources actuelles de l'hyperviseur. Cela rend la virtualisation très flexible et évolutive.

La virtualisation a-t-elle des inconvénients ?

Passer d'un ensemble de serveurs physiques à des serveurs virtuels hébergés sur un ou plusieurs hyperviseurs, c'est un projet conséquent. Surtout, c'est un projet avec des coûts initiaux élevés, car l'organisation doit acquérir du matériel correctement dimensionné (rappel : chaque VM doit disposer de ses propres ressources), notamment un serveur et un logiciel de virtualisation adapté (une licence Windows Server pour Hyper-V, par exemple).

Partie 4 : Les prérequis pour la virtualisation
Je souhaite faire de la virtualisation de serveurs, de quoi ai-je besoin ? Un ensemble de prérequis sont à respecter afin de pouvoir créer un ensemble de machines virtuelles sur une machine physique.

Matériel compatible
Vous aurez besoin d'un serveur ou d'un poste de travail avec un processeur qui prend en charge la virtualisation. C'est le cas de la plupart des processeurs modernes d'Intel et d'AMD, mais il est important d'avoir connaissance de ce prérequis.

Ceci se traduit par l'activation de la fonctionnalité "Intel VT-x" sur les machines avec un processeur Intel et "AMD-V" sur celles avec un processeur AMD. Cette fonctionnalité peut être activée ou désactivée dans les paramètres du BIOS de la machine.

Par ailleurs, la technologie "Intel VT-d" joue un rôle dans la virtualisation des entrées/sorties (input/output) avec les processeurs Intel. Chez AMD, l'équivalent s'appelle "IOMMU". Là encore, la configuration s'effectue dans le BIOS.

Ressources matérielles
La machine physique doit disposer de suffisamment de ressources pour ses propres besoins, notamment pour l'exécution de l'hyperviseur, mais aussi pour ceux des machines virtuelles. Il est assez facile de comprendre que vous avez besoin de suffisamment de mémoire vive (RAM) et d'espace de stockage pour supporter les machines virtuelles que vous prévoyez de créer.

Prenons un exemple : vous avez besoin de créer deux machines virtuelles avec 4 Go de RAM et 80 Go d'espace disque chacune. Cela signifie que votre hyperviseur doit disposer d'au moins 8 Go de RAM et 160 Go de disque, rien que pour les besoins des machines virtuelles.

Logiciel de virtualisation pour l'hyperviseur
La virtualisation de serveurs passe par l'installation et l'utilisation d'une application pour que la machine assure le rôle d'hyperviseur. C'est donc un prérequis. Il existe de nombreux hyperviseurs sur le marché, tels que VMware vSphere, Microsoft Hyper-V, Proxmox VE, et XCP-ng. Le choix de l'hyperviseur dépendra de vos besoins spécifiques, de votre budget, mais aussi de vos connaissances techniques.

Sources d'installation
Pour l'installation de chaque machine virtuelle, vous aurez besoin des sources d'installation du système d'exploitation que vous souhaitez installer, ainsi que des applications. Ainsi, il peut s'avérer judicieux de créer une bibliothèque d'images ISO : inutile de créer une clé USB bootable, les image disques suffiront car le fichier ISO peut être chargé dans le lecteur DVD virtuel de la VM.

Partie 5 : Hyperviseur de type 1 et type 2
Un hyperviseur de type 1 correspond à un système qui s’installe directement sur la couche matérielle du serveur. On parle d'hyperviseur natif. Lorsqu'un hyperviseur de type 1 est installé sur une machine, la machine ne peut pas servir à autre chose qu'à faire tourner l'hyperviseur, elle est dédiée à cet usage (sauf exceptions). Il faut considérer que l'hyperviseur devient le système d'exploitation de la machine.

Un hyperviseur de type 2 est un logiciel qui s’installe et s’exécute sur un système d’exploitation déjà en place. On parle d'hyperviseur hébergé. Par exemple, une machine sous Windows 11 sur lequel on va venir installer un logiciel de virtualisation tel qu'Oracle VirtualBox ou VMware Workstation, comme on le ferait avec n'importe quel autre logiciel.

Hyperviseur type 1 et type 2
Pour approfondir ce point, consultez cet article :

Les types d’hyperviseurs : hyperviseur de type 1 et de type 2

Conclusion
Le concept de la virtualisation étant introduit, nous allons pouvoir évoquer Hyper-V dans le prochain chapitre de ce cours. Par la suite, nous répondrons également à une question importante, mais pour laquelle la réponse n'est pas si évidente qu'il n'y parait : Hyper-V est-il un hyperviseur de type 1 ou de type 2 ?

