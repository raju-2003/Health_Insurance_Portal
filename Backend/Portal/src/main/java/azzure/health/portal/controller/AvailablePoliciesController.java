package azzure.health.portal.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

import azzure.health.portal.entity.Availablepolicies;
import azzure.health.portal.service.AvailablePolciesService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AvailablePoliciesController {

    @Autowired
    private AvailablePolciesService availablePolciesService;

    @GetMapping("/user/availablepolicies")
    public List<Availablepolicies> getAvailablePolicies() {
        return availablePolciesService.getAvailablePolicies();
    }

    @PostMapping("/user/register/availablepolicies")
    public String registerAvailablePolicies(@RequestBody Availablepolicies availablepolicies) {
        return availablePolciesService.registerAvailablePolicies(availablepolicies);
    }

    @GetMapping("/user/availablepolicies/{id}")
    public Optional<Availablepolicies> getAvailablePoliciesById(@PathVariable long id) {
        return availablePolciesService.getAvailablePoliciesById(id);
    }

    @PutMapping("/user/availablepolicies/{id}")
    public String updateAvailablePolicies(@PathVariable long id, @RequestBody Availablepolicies availablepolicies) {
        return availablePolciesService.updateAvailablePolicies(id, availablepolicies);
    }

    @DeleteMapping("/user/availablepolicies/{id}")
    public String deleteAvailablePolicies(@PathVariable long id) {
        return availablePolciesService.deleteAvailablePolicies(id);
    }


    
}
