/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.17-log : Database - app
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`app` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `app`;

/*Table structure for table `band` */

DROP TABLE IF EXISTS `band`;

CREATE TABLE `band` (
  `b_id` int(11) NOT NULL AUTO_INCREMENT,
  `b_name` varchar(50) DEFAULT NULL,
  `b_img` varchar(500) DEFAULT NULL,
  `b_link` varchar(500) DEFAULT NULL,
  `DATE` datetime DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  PRIMARY KEY (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `band` */

insert  into `band`(`b_id`,`b_name`,`b_img`,`b_link`,`DATE`,`state`) values (1,'艺术燃烧你的梦—ART','/images/band/band (2).jpg',NULL,'2018-01-03 00:00:00',1),(2,'打开你的新世界','/images/band/band (11).jpg',NULL,'2018-01-03 00:00:00',1),(3,'让性感陪伴你','/images/band/band (10).jpg',NULL,'2018-01-03 00:00:00',1),(4,'HSIA—新的体验，新的感觉','/images/band/band (15).jpg',NULL,'2018-01-03 00:00:00',1),(5,'学会了解自己，爱护自己','/images/band/band (14).jpg',NULL,'2018-01-04 00:00:00',1),(6,'Aubade—你有你的style','/images/band/band (16).jpg',NULL,'2018-01-03 00:00:00',1);

/*Table structure for table `collect` */

DROP TABLE IF EXISTS `collect`;

CREATE TABLE `collect` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `u_id` int(11) DEFAULT NULL,
  `DATE` datetime DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  `s_id` int(11) DEFAULT NULL,
  `v_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `collect` */

insert  into `collect`(`c_id`,`type`,`u_id`,`DATE`,`state`,`s_id`,`v_id`) values (1,1,1,'2018-01-03 00:00:00',1,1,1),(2,0,2,'2018-01-03 00:00:00',1,2,2),(3,1,3,'2018-01-03 00:00:00',1,3,3),(4,1,1,'2018-01-03 00:00:00',1,2,3),(5,0,2,'2018-01-03 00:00:00',1,3,1),(6,0,3,'2018-01-03 00:00:00',1,2,2),(7,0,1,'2018-01-04 00:00:00',1,4,3),(8,1,2,'2018-01-05 00:00:00',1,1,2),(9,1,3,'2018-01-04 00:00:00',1,4,3);

/*Table structure for table `enjoy` */

DROP TABLE IF EXISTS `enjoy`;

CREATE TABLE `enjoy` (
  `e_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) DEFAULT NULL,
  `DATE` datetime DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `enjoy` */

insert  into `enjoy`(`e_id`,`u_id`,`DATE`,`state`) values (1,1,'2018-01-03 00:00:00',1),(2,2,'2018-01-03 00:00:00',1),(3,3,'2018-01-03 00:00:00',1),(4,1,'2018-01-03 00:00:00',1),(5,2,'2018-01-03 00:00:00',1),(6,3,'2018-01-03 00:00:00',1),(7,1,NULL,1);

/*Table structure for table `find_det` */

DROP TABLE IF EXISTS `find_det`;

CREATE TABLE `find_det` (
  `f_id` int(11) NOT NULL AUTO_INCREMENT,
  `f_yi_img` varchar(500) DEFAULT NULL,
  `f_ku_img` varchar(500) DEFAULT NULL,
  `f_yi_name` varchar(50) DEFAULT NULL,
  `f_ku_name` varchar(50) DEFAULT NULL,
  `f_yi_mon` int(11) DEFAULT NULL,
  `f_ku_mon` int(11) DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`f_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `find_det` */

insert  into `find_det`(`f_id`,`f_yi_img`,`f_ku_img`,`f_yi_name`,`f_ku_name`,`f_yi_mon`,`f_ku_mon`,`s_id`) values (1,'/images/yi/yi_1.jpg','/images/yi/yi_1-1.jpg','save from Love story','save from Love story',34,44,1),(2,'/images/yi/yi_2.jpg','/images/yi/yi_2-1.jpg','save from Love story','save from Love story',66,6,2),(3,'/images/yi/yi_3.jpg','/images/yi/yi_3-1.jpg','save from Love story','save from Love story',45,3,3),(4,'/images/yi/yi_4.jpg','/images/yi/yi_4-1.jpg','save from Love story','save from Love story',213,23,4),(5,'/images/yi/yi_5.jpg','/images/yi/yi_5-1.jpg','save from Love story','save from Love story',33,2,5),(6,'/images/yi/yi_6.jpg','/images/yi/yi_6-1.jpg','save from Love story','save from Love story',11,2,6),(7,'/images/yi/yi_7.jpg','/images/yi/yi_7-1.jpg','save from Love story','save from Love story',133,23,7),(8,'/images/yi/yi_8.jpg','/images/yi/yi_8-1.jpg','save from Love story','save from Love story',321,12,8),(9,'/images/yi/yi_9.jpg','/images/yi/yi_9-1.jpg','save from Love story','save from Love story',33,2,9),(10,'/images/yi/yi_10.jpg','/images/yi/yi_10-1.jpg','save from Love story','save from Love story',133,23,10),(11,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `shoplist` */

DROP TABLE IF EXISTS `shoplist`;

CREATE TABLE `shoplist` (
  `s_id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `s_name` varchar(50) DEFAULT NULL,
  `s_img` varchar(500) DEFAULT NULL,
  `s_introduce` text,
  `s_content` varchar(50) DEFAULT NULL,
  `b_id` int(11) DEFAULT NULL,
  `DATE` datetime DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  `clectNum` int(255) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

/*Data for the table `shoplist` */

insert  into `shoplist`(`s_id`,`s_name`,`s_img`,`s_introduce`,`s_content`,`b_id`,`DATE`,`state`,`clectNum`) values (0000000001,'Miranda Ker','/images/find/1.jpg',NULL,'People ',2,'2018-01-03 00:00:00',1,2),(0000000002,'jre','/images/find/2.jpg',NULL,'Swanepoel',3,'2018-01-02 00:00:00',1,2),(0000000003,'Candice','/images/find/3.jpg',NULL,'Magazine',1,'2018-01-01 00:00:00',1,1),(0000000004,'Heidi Klum','/images/find/4.jpg',NULL,'vasfrtw3te',1,'2018-01-03 00:00:00',1,333),(0000000005,'Naomi ','/images/find/5.jpg',NULL,'Campbell',2,'2018-01-04 00:00:00',1,1),(0000000006,'Bar Refaeli','/images/find/6.jpg',NULL,'Campbell',2,'2018-01-02 00:00:00',1,2),(0000000007,'Carmen','/images/find/7.jpg',NULL,' Kass',3,'2018-01-03 00:00:00',1,22),(0000000008,'Carmen','/images/find/8.jpg',NULL,'Campbell',3,'2018-01-04 00:00:00',1,55),(0000000009,'Carmen','/images/find/9.jpg',NULL,'Campbell',2,'2018-01-03 00:00:00',1,556),(0000000010,'Carmen','/images/find/10.jpg',NULL,'Campbell',1,'2017-12-30 00:00:00',1,11),(0000000011,'Carmen','/images/find/11.jpg',NULL,'Campbell',3,'2017-12-31 00:00:00',1,44),(0000000012,'Carmen','/images/find/12.jpg',NULL,'Campbell',4,NULL,1,11);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(10) DEFAULT 'show',
  `u_pwd` varchar(50) NOT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `headSrc` varchar(500) DEFAULT '/images/head/default.jpg',
  `DATE` datetime DEFAULT '2018-01-05 00:00:00',
  `state` int(11) DEFAULT '1',
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`u_id`,`u_name`,`u_pwd`,`tel`,`headSrc`,`DATE`,`state`) values (1,'show','123','12345678998','/images/head/t1.jpg','2018-01-03 00:00:00',1),(2,'yx','123','32165498732','/images/head/t2.jpg','2018-01-03 00:00:00',1),(3,'hpp','123','14725836996','/images/head/t3.jpg','2018-01-03 00:00:00',1),(4,'zkx','123','96385274174','/images/head/t4.jpg','2018-01-03 00:00:00',1),(5,'admin','123','01478521239','/images/head/t5.jpg','2018-01-03 00:00:00',1),(6,'show','123','1365464','/images/head/t6.jpg','2018-01-05 00:00:00',1),(7,'show','123','3543453','/images/head/t7.jpg','2018-01-05 00:00:00',1),(8,'show','123','3543453','/images/head/t8.jpg',NULL,1),(14,'show','123','13281867929','/images/head/default.jpg','2018-01-05 00:00:00',1);

/*Table structure for table `video` */

DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `v_id` int(11) NOT NULL AUTO_INCREMENT,
  `v_name` varchar(50) DEFAULT NULL,
  `v_img` varchar(500) DEFAULT NULL,
  `v_introduce` text,
  `DATE` datetime DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  PRIMARY KEY (`v_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `video` */

insert  into `video`(`v_id`,`v_name`,`v_img`,`v_introduce`,`DATE`,`state`) values (1,'粉红国度长腿眼花缭乱 中国姑娘向你发射爱心','/video/6.mp4','格外清爽阳光，没有一丝压抑。再用滤镜拍摄仪一段静音全景的花海图，也十分漂亮。后来美女们乐得不可开交地要拍照合影了。这一部分拍摄比较简单，时间间隔也比较短。第三部分就是在室内参观游览，室内的名画书法特别多，琳琅满目应接不暇，还有各种出土古迹摆放供游客们欣赏。映入眼帘的就是一片花海了！有郁金香、玫瑰、牡丹、薰衣草等等名贵芬芳的花种。除了全景拍摄花景之外我还抓拍到一堆双胞胎在花丛里微笑摆拍的视频，在熙熙攘攘的人群里她们的笑容给人格外清爽阳光，没有一丝压抑','2018-01-03 00:00:00',1),(2,'秘密女郎蕾丝透视齐上阵 奚梦瑶半露美胸撩人','/video/1.mp4','花的海洋；美女们的合影留恋；参观园林博览会现场和内场。  一下车，并没有看到花团锦簇争鲜斗艳的花海，走了一段路，拍了一段路边开得正盛的小菊花，虽然对即将走入花海的人来说它们并不起眼，但是却也是不可多得的别致的一道风景线。只可惜手机拍摄过程摄像头没拿好在剪辑过程出现侧面播放的情况。','2018-01-03 00:00:00',1),(3,'前路奇缘最热辣民族风 刘雯满分热情让你疯狂','/video/8.mp4','管理员和读者的不方便。本视频通过不同读者从书架上拿出书的动作，并利用书上的文字内容，逐步展示出本视频的主题“方便他人，就是方便自己”。只有大家负起责任，将拿出来的书按原位放好，才能够为他人带来方便，同时，也是为自己提供了方便。图书馆是大家学习的常去之处，图书馆的书很多，因此有了索引编号，方便了管理和借阅。但与此同时，很多人却常常将从书架上拿下来的书因为各种原因不能正确的归还到书架上，而是随手乱扔或者干脆将书放入不是同一类的书','2018-01-03 00:00:00',1),(4,'地罗曼史碎花攀上肉体 何穗白过全场仙气爆表','/video/4.mp4','望穿秋水的2016维秘大秀已经走完了，当然，对于普罗大众来说，每次看维密秀都会又双叒叕受到一万点暴击。这些天使的存在仿佛在提醒你，虽然我们来自同一个星球，但差别原来可以辣……么大。\r\n\r\n据说她们秀前一个月会经过严格的训练，强度一般般，也就比运动员再艰苦些~望穿秋水的2016维秘大秀已经走完了，当然，对于普罗大众来说，每次看维密秀都会又双叒叕受到一万点暴击。这些天使的存在仿佛在提醒你，虽然我们来自同一个星球，但差别原来可以辣……么大。\r\n\r\n据说她们秀前一个月会经过严格的训练，强度一般般，也就比运动员再艰苦些~','2018-01-07 00:00:00',1),(5,'EdSheeran维密现场thinking out loud演出','/video/5.mp4','秀场上的造型大家看得太多，有人吐槽“维密天使给您拜年啦”，也有人说复古东方风碰撞金发碧眼简直太美。但主页妞觉得，维密秀结束后的after party上，卸下翅膀的天使们更美。秀场上的造型大家看得太多，有人吐槽“维密天使给您拜年啦”，也有人说复古东方风碰撞金发碧眼简直太美。但主页妞觉得，维密秀结束后的after party上，卸下翅膀的天使们更美。秀场上的造型大家看得太多，有人吐槽“维密天使给您拜年啦”，也有人说复古东方风碰撞金发碧眼简直太美。但主页妞觉得，维密秀结束后','2018-01-07 00:00:00',1),(8,'白过全场仙气爆表','/video/15.mp4','维多利亚的秘密（Victoria\'s Secret）成立于20世纪70年代初，公司每天每分钟内衣的销量达600多件。它不仅是全美国，更是全世界内衣界的龙头。\r\n\r\n如果你和我一样好奇这名字的由来，那就让我们一起回到大英帝国的维多利亚时代。据说在维多利亚时代,女人们的装束层层叠叠十分严密，裙下的秘密自然最能激发人们的好奇心和窥探欲，借此概念，创办人希望自己的商店及产品能够体现维多利亚时代的闺房景象，所以为自己的品牌命名为维多利亚的秘密。设计师按着维多利亚的风格，设计出一些性感的内衣，展现维多利亚时期女性的秘密风景。\r\n','2018-01-07 00:00:00',1),(9,'粉红国度长腿眼花缭乱 中国姑娘向你发射爱心','/video/10.mp4','  2015维密内衣秀上演，今年的runway会有15位天使一起走秀，堪称维密史上天使人数之最。34对象征天使的翅膀将出现在大秀中。大家千万不要觉得走维密的都是天使，其实维密超模也是分自己家的和外边的两种，而且真心的是有翅膀还签了约的叫维密天使。\r\n  2015维密内衣秀上演，今年的runway会有15位天使一起走秀，堪称维密史上天使人数之最。34对象征天使的翅膀将出现在大秀中。大家千万不要觉得走维密的都是天使，其实维密超模也是分自己家的和外边的两种，而且真心的是有翅膀还签了约的叫维密天使。\r\n','2018-01-07 00:00:00',1),(10,'秘密女郎蕾丝透视齐上阵 奚梦瑶半露美胸撩人','/video/11.mp4',' 维密秀的影响力真是一年更比一年强，眼下这场内衣界的“奥斯卡”盛宴马上就要上演了。这次我们特别高兴的邀请到了中国超模奚梦瑶（我们都爱喊她小明童鞋）来做我们的维密直播嘉宾(☆_☆)～给大家带去最具时效和美感的视觉盛宴。另外，特别值得一提的就是这次听说这次小明童鞋跟中国超模何穗有翅膀哦！所以她们就成为了中国维密超模军团中第一波拥有翅膀的超模了！so cool～\r\n \r\n家带去最具时效和美感的视觉盛宴。另外，特别值得一提的就是这次听说这次小明童鞋跟中国超模何穗有翅膀哦！所以她们就成为了中国维密超模军团中第一波拥有翅膀的超模了！so cool～\r\n','2018-01-07 00:00:00',1),(11,'前路奇缘最热辣民族风 刘雯满分热情让你疯狂','/video/12.mp4','大家千万不要觉得走维密的都是天使，其实维密超模也是分自己家的和外边的两种，而且真心的是有翅膀还签了约的叫维密天使，没有翅膀的叫维密超模。如果你翻出几年的VS秀，会发现不是每个模特都有翅膀，有翅膀的就那几个，比如可儿、邦辰等这些知名超模大家千万不要觉得走维密的都是天使，其实维密超模也是分自己家的和外边的两种，而且真心的是有翅膀还签了约的叫维密天使，没有翅膀的叫维密超模。如果你翻出几年的VS秀，会发现不是每个模特都有翅膀，有翅膀的就那几个，比如可儿、邦辰等这些知名超模','2018-01-07 00:00:00',1),(12,'EdSheeran维密现场thinking out loud演出','/video/13.mp4','接下来你将看到的是2014维密秀——Gilded Angels金色天使系列\r\n\r\n金色的翅膀、金色的内衣、金色的珠宝、金色的鞋子、天使们的金发和泛着金色的美肌，简直就是土豪天使降临，气势恢宏的演绎了一场古希腊神话的视觉盛筵。本系列的翅膀是最贴合天使翅膀形状的设计，当天使都镀金了，那多值钱！\r\n接下来你将看到的是2014维密秀——Gilded Angels金色天使系列\r\n色的内衣、金色的珠宝、金色的鞋子、天使们的金发和泛着金色的美肌，简直就是土豪天使降临，气势恢宏的演绎了一场古希腊神话的视觉盛筵。本系列的翅膀是最贴合天使翅膀形状的设计，当天使都镀金了，那多值钱！\r\n接下来你将看到的是2014维密秀——Gilded Angels金色天使系列\r\n\r\n金色都镀金了，那多值钱！\r\n','2018-01-07 00:00:00',1),(13,'白过全场仙气爆表','/video/14.mp4','  首先最好你得VS公司的签约，这样你就是名正言顺的“签约天使”了，其实大多数天使在和公司签约天使合同前就已有合作了。当然，不是签约的有时也会有翅膀，例如2014VS秀中“童话”那一场就四个签约天使，还有八个不是。给谁翅膀都是设计师的意思喽～\r\n  首先最好你得VS公司的签约，这样你就是名正言顺的“签约天使”了，其实大多数天使在和公司签约天使合同前就已有合作了。当然，不是签约的有时也会有翅膀，例如2014VS秀中“童话”那一场就四个签约天使，还有八个不是。给谁翅膀都是设计师的意思喽～\r\n','2018-01-07 00:00:00',1),(14,'	2015维密内衣秀上演 超级官方解说翅膀秘密','/video/9.mp4','让人印象深刻，但是都无缘翅膀。所以说小明何穗这次有翅膀确实是一件让人鸡冻人心的事情，得到了维密的莫大首肯。可喜可贺哦～\r\n  何穗做模特八年，这次参加VS秀就是第五次做维密超模了，终于在这次有了翅膀。还有我们的大表姐刘雯，全球排名第三的她已经被意大利高级内衣品牌LaPerla给抢走了，竞品代言人注定背不上翅膀了。秦舒培触电一次，小豹子造型让人印象深刻，但是都无缘翅膀。所以说小明何穗这次有翅膀确实是一件让人鸡冻人心的事情，得到了维密的莫大首肯。可喜可贺哦～\r\n','2018-01-07 00:00:00',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
