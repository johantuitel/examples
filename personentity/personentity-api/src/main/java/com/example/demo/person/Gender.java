package com.example.demo.person;

public enum Gender {
  MALE("M"),
  FEMALE("F");

  private String shortName;

  Gender(String shortName){
    this.shortName = shortName;
  }

  public String getShortName(){
    return this.shortName;
  }
}
