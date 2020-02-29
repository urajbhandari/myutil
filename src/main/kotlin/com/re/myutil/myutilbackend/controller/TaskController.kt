package com.re.myutil.myutilbackend.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin
@RequestMapping("task")
class TaskController {

    @GetMapping
    fun allTasks() = listOf<String>(
            "Amazon AWS",
            "Finish Udemy ML questions.",
            "Docker/Kubernetes: Book 'Docer in Action'",
            "Kafka",
            "Coursera ML Andrew Ng's course.",
            "Google cloud",
            "Tensorflow/Tensorboard",
            "Python: 'Hands-On Machine Learning with Scikit-Learn, Keras and TF'",
            "Kafka, Kinesis, Flink, Kafka Streams",
            "Column stores: Cassandra, Hive or HBase",
            "Pytorch",
            "Apache Spark",
            "Hadoop",
            "DevOps tooling like Terraform or CloudFormation",
            "Testing React with Jest"
    )

}