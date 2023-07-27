package azzure.health.portal.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Registeredpolicies;
import azzure.health.portal.service.RegisteredPolciesService;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegisteredPolciesController {
    @Autowired
    private RegisteredPolciesService registeredPolciesService;

    @GetMapping("/user/registeredpolicies")
    public List<Registeredpolicies> getRegisteredPolicies() {
        return registeredPolciesService.getRegisteredPolicies();
    }

    @PostMapping("/user/register/registeredpolicies")
    public String registerRegisteredPolicies(@RequestBody Registeredpolicies registeredpolicies) {
        return registeredPolciesService.registerRegisteredPolicies(registeredpolicies);
    }

    @GetMapping("/user/registeredpolicies/{id}")
    public Optional<Registeredpolicies> getRegisteredPoliciesById(@PathVariable long id) {
        return registeredPolciesService.getRegisteredPoliciesById(id);
    }

    @PutMapping("/user/registeredpolicies/{id}")
    public String updateRegisteredPolicies(@PathVariable long id, @RequestBody Registeredpolicies registeredpolicies) {
        return registeredPolciesService.updateRegisteredPolicies(id, registeredpolicies);
    }

    @DeleteMapping("/user/registeredpolicies/{id}")
    public String deleteRegisteredPolicies(@PathVariable long id) {
        return registeredPolciesService.deleteRegisteredPolicies(id);
    }
    
}
