package azzure.health.portal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Renew;
import azzure.health.portal.service.RenewService;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RenewController {
    @Autowired
    private RenewService renewService;

    @GetMapping("/user/renew")
    public List<Renew> getRenew() {
        return renewService.getRenew();
    }

    @PostMapping("/user/register/renew")
    public String addRenew(@RequestBody Renew renew) {
        return renewService.addRenew(renew);
    }

    @GetMapping("/user/renew/{id}")
    public Optional<Renew> getRenewByid(@PathVariable Long id) {
        return renewService.getRenewByid(id);
    }

    @DeleteMapping("/user/renew/{id}")
    public void deleteRenew(@PathVariable Long id) {
        renewService.deleteRenew(id);
    }
}
