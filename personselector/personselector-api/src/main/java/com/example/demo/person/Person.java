package com.example.demo.person;

import lombok.Data;

import java.util.UUID;

@Data
public class Person {
  private String uuid;
  private String name;
  private Gender gender;

  public Person(String name, Gender gender){
    UUID randomUUID = UUID.randomUUID();
    this.uuid = randomUUID.toString();
    this.name = name;
    this.gender = gender;
  }

}
