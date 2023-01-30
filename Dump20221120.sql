-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: modelapp
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `adminid` varchar(45) NOT NULL DEFAULT '0',
  `password` varchar(500) NOT NULL DEFAULT '0',
  `role` varchar(45) NOT NULL,
  `supplyname` varchar(100) NOT NULL DEFAULT '0',
  `address` varchar(150) NOT NULL DEFAULT '0',
  `pincode` varchar(45) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Incco','Technologies','9686374996','1Incco','$2b$10$./A2t25DEnhGwzGB/pqaOuhwVWpjqRc2JQ1qHU1WMN5w5AJewTWvm','admin','Incco Technologies','Palke New House, Bantakal Post, Kaup Tq, Udupi Dist','574 - 115'),(2,'test','incco','1234567890','2test','$2b$10$3YznftZBCNWxDF.OaTmDzeH90PudfvGZqJS97oAKadSAZGjBU8DJi','manager','0','0','0'),(3,'testone','incco','1234567890','3testone','$2b$10$7q5wKkp2yCfIAKnsvxvKYOung81qluuKh5TStjYpEZqXeIgkChaZG','manager','0','0','0');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calculatediscount`
--

DROP TABLE IF EXISTS `calculatediscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calculatediscount` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechtype` varchar(45) NOT NULL DEFAULT 'null',
  `rechamount` int NOT NULL DEFAULT '0',
  `purchbalance` int NOT NULL DEFAULT '0',
  `sellingbalance` int NOT NULL DEFAULT '0',
  `disc` int NOT NULL DEFAULT '0',
  `useridentity` varchar(45) NOT NULL DEFAULT '0',
  `storeidentity` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calculatediscount`
--

LOCK TABLES `calculatediscount` WRITE;
/*!40000 ALTER TABLE `calculatediscount` DISABLE KEYS */;
INSERT INTO `calculatediscount` VALUES (1,'purchase',100,0,0,0,'1utest','1steststore'),(2,'salesbalance',100,0,0,10,'1steststore','1steststore'),(3,'Purchase',100,0,0,0,'1steststore','1steststore'),(4,'salesbalance',100,0,0,10,'1mtestmarketer','1steststore'),(5,'Purchase',100,1000,0,0,'1steststore','1steststore'),(6,'Purchase',100,1000,0,0,'2steststoreone','2steststoreone');
/*!40000 ALTER TABLE `calculatediscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(200) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `rate` int DEFAULT NULL,
  `orderquantity` int DEFAULT NULL,
  `userid` varchar(45) DEFAULT '0',
  `managerid` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `totalamount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cashcalculatemanager`
--

DROP TABLE IF EXISTS `cashcalculatemanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cashcalculatemanager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalcash` int DEFAULT '0',
  `managerid` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cashcalculatemanager`
--

LOCK TABLES `cashcalculatemanager` WRITE;
/*!40000 ALTER TABLE `cashcalculatemanager` DISABLE KEYS */;
INSERT INTO `cashcalculatemanager` VALUES (1,0,'2test'),(2,0,'3testone');
/*!40000 ALTER TABLE `cashcalculatemanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cashhistorymanager`
--

DROP TABLE IF EXISTS `cashhistorymanager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cashhistorymanager` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cashrecieved` int DEFAULT '0',
  `storeid` varchar(45) DEFAULT '0',
  `managerid` varchar(45) DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cashhistorymanager`
--

LOCK TABLES `cashhistorymanager` WRITE;
/*!40000 ALTER TABLE `cashhistorymanager` DISABLE KEYS */;
INSERT INTO `cashhistorymanager` VALUES (1,500,'1steststore','2test','2022-11-18');
/*!40000 ALTER TABLE `cashhistorymanager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechtype` varchar(45) NOT NULL DEFAULT 'null',
  `rechamount` int NOT NULL DEFAULT '0',
  `purchbalance` int NOT NULL DEFAULT '0',
  `sellingbalance` int NOT NULL DEFAULT '0',
  `disc` int NOT NULL DEFAULT '0',
  `useridentity` varchar(45) NOT NULL DEFAULT '0',
  `storeidentity` varchar(45) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (1,'purchase',100,1000,0,0,'1utest','1steststore','2022-11-18'),(2,'salesbalance',100,0,1000,10,'1steststore','1steststore','2022-11-18'),(3,'Purchase',100,1000,0,0,'1steststore','1steststore','2022-11-18'),(4,'salesbalance',100,0,1000,10,'1mtestmarketer','1steststore','2022-11-18'),(5,'Purchase',100,1000,0,0,'1steststore','1steststore','2022-11-18'),(6,'Purchase',100,1000,0,0,'2steststoreone','2steststoreone','2022-11-18');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketer`
--

DROP TABLE IF EXISTS `marketer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marketer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customid` varchar(45) NOT NULL DEFAULT 'm',
  `firmname` varchar(45) NOT NULL,
  `location` varchar(150) NOT NULL,
  `pincode` varchar(45) NOT NULL,
  `industry` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `marketerid` varchar(45) NOT NULL DEFAULT '0',
  `password` varchar(500) NOT NULL DEFAULT '0',
  `role` varchar(45) NOT NULL,
  `salebalance` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='				';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketer`
--

LOCK TABLES `marketer` WRITE;
/*!40000 ALTER TABLE `marketer` DISABLE KEYS */;
INSERT INTO `marketer` VALUES (1,'m','testmarketer','testmarketer, udupi','574115','fmcg','testmarketer','incco','1234567890','1mtestmarketer','$2b$10$gusW26eb7cOiqrkhOGCbQOLLIz1CX0VlkQblFqms.O6yd51KN96tG','marketer',1000),(2,'m','testmarketerone','testmarkterone, udupi','574115','fmcg','testmarketerone','incco','1234567890','2mtestmarketerone','$2b$10$jt3KTG9n4nC9X83is8AoQ.bAFBDOIJuh59O6.xi6qF08N9LNj8hvG','marketer',0);
/*!40000 ALTER TABLE `marketer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marketersalestopup`
--

DROP TABLE IF EXISTS `marketersalestopup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marketersalestopup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechargeamount` int NOT NULL,
  `salesbalance` int NOT NULL,
  `discount` int NOT NULL,
  `rechargetype` varchar(45) NOT NULL DEFAULT 'salesbalance',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marketersalestopup`
--

LOCK TABLES `marketersalestopup` WRITE;
/*!40000 ALTER TABLE `marketersalestopup` DISABLE KEYS */;
INSERT INTO `marketersalestopup` VALUES (1,100,1000,10,'salesbalance');
/*!40000 ALTER TABLE `marketersalestopup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitems`
--

DROP TABLE IF EXISTS `orderitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(200) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `rate` int DEFAULT NULL,
  `orderquantity` int DEFAULT NULL,
  `totalamount` int DEFAULT NULL,
  `userid` varchar(45) DEFAULT '0',
  `managerid` varchar(45) DEFAULT NULL,
  `orderid` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `orderitems_ibfk_1` (`orderid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitems`
--

LOCK TABLES `orderitems` WRITE;
/*!40000 ALTER TABLE `orderitems` DISABLE KEYS */;
INSERT INTO `orderitems` VALUES (1,'Ruchi Gold 1 ltr','10 Pkt','Box',1000,1,1000,'1steststore','2test',1),(2,'Ruchi Gold 500ml','20 Pkt','Box',1000,1,1000,'1steststore','2test',1);
/*!40000 ALTER TABLE `orderitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) NOT NULL,
  `managerid` varchar(45) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'1steststore','2test','2022-11-18');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productlist`
--

DROP TABLE IF EXISTS `productlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(200) NOT NULL,
  `description` varchar(45) NOT NULL DEFAULT '0',
  `unit` varchar(45) NOT NULL DEFAULT '0',
  `rate` int NOT NULL DEFAULT '0',
  `quantity` int NOT NULL DEFAULT '0',
  `uom` varchar(45) NOT NULL DEFAULT '0',
  `rateperunit` varchar(45) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productlist`
--

LOCK TABLES `productlist` WRITE;
/*!40000 ALTER TABLE `productlist` DISABLE KEYS */;
INSERT INTO `productlist` VALUES (1,'Ruchi Gold 1 ltr','10 Pkt','Box',1000,99,'10 Pkt Box','1000 / Box'),(2,'Ruchi Gold 500ml','20 Pkt','Box',1000,99,'20 Pkt Box','1000 / Box');
/*!40000 ALTER TABLE `productlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotionandsales`
--

DROP TABLE IF EXISTS `promotionandsales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotionandsales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL DEFAULT '0',
  `rechargeamount` int NOT NULL DEFAULT '0',
  `orderamount` int NOT NULL DEFAULT '0',
  `phase` int NOT NULL DEFAULT '0',
  `orderperphase` int NOT NULL DEFAULT '0',
  `cut` varchar(45) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotionandsales`
--

LOCK TABLES `promotionandsales` WRITE;
/*!40000 ALTER TABLE `promotionandsales` DISABLE KEYS */;
INSERT INTO `promotionandsales` VALUES (1,'promotion',1000,10000,0,0,'no'),(2,'salespromotion',1000,10000,5,2000,'yes');
/*!40000 ALTER TABLE `promotionandsales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotionandsalescalculate`
--

DROP TABLE IF EXISTS `promotionandsalescalculate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotionandsalescalculate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL DEFAULT '0',
  `rechargeamount` int NOT NULL DEFAULT '0',
  `orderamount` int NOT NULL DEFAULT '0',
  `phase` int NOT NULL DEFAULT '0',
  `orderperphase` int NOT NULL DEFAULT '0',
  `cut` varchar(45) NOT NULL DEFAULT '0',
  `userid` varchar(45) NOT NULL DEFAULT '0',
  `managerid` varchar(45) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotionandsalescalculate`
--

LOCK TABLES `promotionandsalescalculate` WRITE;
/*!40000 ALTER TABLE `promotionandsalescalculate` DISABLE KEYS */;
INSERT INTO `promotionandsalescalculate` VALUES (1,'promotion',1000,0,0,0,'no','1mtestmarketer','2test','2022-11-18'),(2,'salespromotion',1000,8000,5,2000,'yes','1mtestmarketer','2test','2022-11-18');
/*!40000 ALTER TABLE `promotionandsalescalculate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotionandsalesorderhistory`
--

DROP TABLE IF EXISTS `promotionandsalesorderhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotionandsalesorderhistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL DEFAULT '0',
  `orderamount` int NOT NULL DEFAULT '0',
  `userid` varchar(45) NOT NULL DEFAULT '0',
  `managerid` varchar(45) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotionandsalesorderhistory`
--

LOCK TABLES `promotionandsalesorderhistory` WRITE;
/*!40000 ALTER TABLE `promotionandsalesorderhistory` DISABLE KEYS */;
INSERT INTO `promotionandsalesorderhistory` VALUES (1,'promotion',10000,'1mtestmarketer','2test','2022-11-18'),(2,'salespromotion',2000,'1mtestmarketer','2test','2022-11-18');
/*!40000 ALTER TABLE `promotionandsalesorderhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotionandsalesrechargehistory`
--

DROP TABLE IF EXISTS `promotionandsalesrechargehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotionandsalesrechargehistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL DEFAULT '0',
  `rechargeamount` int NOT NULL DEFAULT '0',
  `orderamount` int NOT NULL DEFAULT '0',
  `phase` int NOT NULL DEFAULT '0',
  `orderperphase` int NOT NULL DEFAULT '0',
  `cut` varchar(45) NOT NULL DEFAULT '0',
  `userid` varchar(45) NOT NULL DEFAULT '0',
  `managerid` varchar(45) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotionandsalesrechargehistory`
--

LOCK TABLES `promotionandsalesrechargehistory` WRITE;
/*!40000 ALTER TABLE `promotionandsalesrechargehistory` DISABLE KEYS */;
INSERT INTO `promotionandsalesrechargehistory` VALUES (1,'promotion',1000,10000,0,0,'no','1mtestmarketer','2test'),(2,'salespromotion',1000,10000,5,2000,'yes','1mtestmarketer','2test');
/*!40000 ALTER TABLE `promotionandsalesrechargehistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchasediscountstore`
--

DROP TABLE IF EXISTS `purchasediscountstore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchasediscountstore` (
  `id` int NOT NULL AUTO_INCREMENT,
  `storediscount` float DEFAULT '0',
  `sellerdiscount` float DEFAULT '0',
  `totalrechargeamount` int DEFAULT '0',
  `storeid` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchasediscountstore`
--

LOCK TABLES `purchasediscountstore` WRITE;
/*!40000 ALTER TABLE `purchasediscountstore` DISABLE KEYS */;
INSERT INTO `purchasediscountstore` VALUES (1,0,0,0,'1steststore'),(2,0,0,100,'2steststoreone');
/*!40000 ALTER TABLE `purchasediscountstore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchasehistory`
--

DROP TABLE IF EXISTS `purchasehistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchasehistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL DEFAULT 'purchase',
  `purchaseamount` int NOT NULL DEFAULT '0',
  `discountamount` int NOT NULL DEFAULT '0',
  `userid` varchar(45) NOT NULL DEFAULT '0',
  `storeid` varchar(45) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchasehistory`
--

LOCK TABLES `purchasehistory` WRITE;
/*!40000 ALTER TABLE `purchasehistory` DISABLE KEYS */;
INSERT INTO `purchasehistory` VALUES (1,'purchase',500,50,'1steststore','1mtestmarketer','2022-11-18'),(2,'purchase',500,50,'1utest','1steststore','2022-11-18'),(3,'purchase',500,50,'1utest','1steststore','2022-11-18'),(4,'purchase',500,50,'1steststore','1mtestmarketer','2022-11-18');
/*!40000 ALTER TABLE `purchasehistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customid` varchar(45) NOT NULL DEFAULT 's',
  `storename` varchar(100) NOT NULL,
  `location` varchar(150) NOT NULL,
  `pincode` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `storeid` varchar(45) NOT NULL DEFAULT '0',
  `password` varchar(500) NOT NULL DEFAULT '0',
  `role` varchar(45) NOT NULL,
  `balance` int NOT NULL DEFAULT '0',
  `salebalance` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (1,'s','teststore','teststore, udupi','574115','teststore','incco','1234567890','1steststore','$2b$10$nZPxcc5SevQ/V1wc4x6jXu8NO6bIWgHSoI2JPF23bCB8v7fkGc.ZC','store',2000,1000),(2,'s','teststoreone','teststoreone, udupi','574115','teststoreone','incco','1234567890','2steststoreone','$2b$10$D7gW1LlTSY4LvhK7EbFRxu6qEfFVbB5kFCde3iFvJG.23uhy7lX5G','store',1000,0);
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storesalestopup`
--

DROP TABLE IF EXISTS `storesalestopup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storesalestopup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechargeamount` int NOT NULL,
  `salesbalance` int NOT NULL,
  `discount` int NOT NULL,
  `rechargetype` varchar(45) NOT NULL DEFAULT 'salesbalance',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storesalestopup`
--

LOCK TABLES `storesalestopup` WRITE;
/*!40000 ALTER TABLE `storesalestopup` DISABLE KEYS */;
INSERT INTO `storesalestopup` VALUES (1,100,1000,10,'salesbalance');
/*!40000 ALTER TABLE `storesalestopup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storetopup`
--

DROP TABLE IF EXISTS `storetopup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `storetopup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechargeamount` int NOT NULL,
  `purchasebalance` int NOT NULL,
  `rechargetype` varchar(45) NOT NULL DEFAULT 'Purchase',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storetopup`
--

LOCK TABLES `storetopup` WRITE;
/*!40000 ALTER TABLE `storetopup` DISABLE KEYS */;
INSERT INTO `storetopup` VALUES (1,100,1000,'Purchase');
/*!40000 ALTER TABLE `storetopup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplydiscount`
--

DROP TABLE IF EXISTS `supplydiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplydiscount` (
  `id` int NOT NULL AUTO_INCREMENT,
  `billamount` int NOT NULL DEFAULT '0',
  `billamountone` int NOT NULL DEFAULT '0',
  `discount` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplydiscount`
--

LOCK TABLES `supplydiscount` WRITE;
/*!40000 ALTER TABLE `supplydiscount` DISABLE KEYS */;
INSERT INTO `supplydiscount` VALUES (1,1,1000,10),(2,1001,2000,20),(3,2001,3000,30);
/*!40000 ALTER TABLE `supplydiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplyhistory`
--

DROP TABLE IF EXISTS `supplyhistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplyhistory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `billamount` int DEFAULT NULL,
  `halfamount` int DEFAULT NULL,
  `discountrate` int DEFAULT NULL,
  `discountamount` float DEFAULT NULL,
  `userid` varchar(45) DEFAULT NULL,
  `managerid` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplyhistory`
--

LOCK TABLES `supplyhistory` WRITE;
/*!40000 ALTER TABLE `supplyhistory` DISABLE KEYS */;
INSERT INTO `supplyhistory` VALUES (1,2000,1000,20,200,'1steststore','2test','2022-11-18');
/*!40000 ALTER TABLE `supplyhistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` varchar(45) NOT NULL,
  `purchasebalance` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'3uc',350);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customid` varchar(45) NOT NULL DEFAULT 'u',
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `contact` varchar(45) NOT NULL,
  `userid` varchar(45) NOT NULL DEFAULT '0',
  `password` varchar(500) NOT NULL DEFAULT '0',
  `role` varchar(45) NOT NULL,
  `balance` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'u','test','incco','1234567890','1utest','$2b$10$FVlGD02OUQr17JwAqvHjp.E8lwZBs1RMUyA2JlJVfUrAubJ7omTyO','user',1000),(2,'u','testone','incco','1234567890','2utestone','$2b$10$MpV5GRdACoezGSOSNW6iAOFDbecOeF6QiD0N7QletESwyFXj2Io4a','user',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertopup`
--

DROP TABLE IF EXISTS `usertopup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertopup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rechargeamount` int NOT NULL,
  `purchasebalance` int NOT NULL,
  `rechargetype` varchar(45) NOT NULL DEFAULT 'purchase',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertopup`
--

LOCK TABLES `usertopup` WRITE;
/*!40000 ALTER TABLE `usertopup` DISABLE KEYS */;
INSERT INTO `usertopup` VALUES (1,100,1000,'purchase');
/*!40000 ALTER TABLE `usertopup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-20 10:53:22
