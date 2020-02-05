package com.example.demo.person;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class PersonController {

  private List<Person> persons = new ArrayList<>();

  public PersonController() {
    initPersons();
  }

  private void initPersons() {
    Person frank = new Person("Frank Underwood", Gender.MALE);
    Person claire = new Person("Claire Underwood", Gender.FEMALE);
    Person doug = new Person("Doug Stamper", Gender.MALE);
    Person jackie = new Person("Jackie Sharp", Gender.FEMALE);

    persons.add(frank);
    persons.add(claire);
    persons.add(doug);
    persons.add(jackie);
  }

  @CrossOrigin
  @GetMapping("/api/person")
  public List<Person> getPersons() {
    return persons;
  }

  @CrossOrigin
  @PutMapping(value = "/api/person", consumes = {"application/json"})
  public Person updatePerson(@RequestBody Person person) {
    for(Person currentPerson : persons) {
      if(currentPerson.getUuid().equals(person.getUuid())) {
        currentPerson.setName(person.getName());
      }
    }
    return person;
  }

  @CrossOrigin
  @PostMapping(value = "/api/person", consumes = {"application/json"})
  public Person addPerson(@RequestBody Person person) {
    UUID uuid = UUID.randomUUID();
    person.setUuid(uuid.toString());
    persons.add(person);
    return person;
  }

  @CrossOrigin
  @DeleteMapping(value = "/api/person/{uuid}", produces = "application/json")
  public void removePerson(@PathVariable String uuid) {
    persons.removeIf(person -> person.getUuid().equals(uuid));
  }
}
