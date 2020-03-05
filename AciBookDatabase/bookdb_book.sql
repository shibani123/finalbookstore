-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: bookdb
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `bookid` int NOT NULL AUTO_INCREMENT,
  `booktitle` varchar(45) NOT NULL,
  `bookauthor` varchar(45) NOT NULL,
  `bookprice` decimal(10,0) NOT NULL,
  `bookquantity` int NOT NULL,
  PRIMARY KEY (`bookid`),
  UNIQUE KEY `bookid_UNIQUE` (`bookid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Harry Potter','J K Rowling',123,100),(2,'Half Girlfriend','Chetan Bagat',200,5),(3,'Wings of fire','Dr. APJ Abdul Kalam',199,20),(4,'In Search of Lost Time','Marcel Proust',150,25),(5,'Ulysses','James Joyce',200,10),(6,'The Great Gatsby',' F. Scott Fitzgerald',279,15),(7,'War and Peace','Leo Tolstoy',149,30),(8,'Hamlet','William Shakespeare',99,11),(9,'The Odyssey','Homer',149,18),(10,'Alice\'s Adventures in Wonderland','Lewis Caroll',1138,28),(11,'Invisible Man','H.G. Wells',499,5),(12,'The Stranger','Albert Camus',160,11),(13,'The Sun Also Rises','Ernest Hemingway',291,16),(14,'The Lord of the Rings','J.R.R. Tolkein',1421,36),(15,'Les Misérables','Dr. APJ Abdul Kalam',187,17),(16,' A Passage to India','EM Forster',298,34),(17,'The Color Purple','Alice Walker',279,40),(18,'Frankenstein','Mary Shelley',101,12);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-05 17:46:47
