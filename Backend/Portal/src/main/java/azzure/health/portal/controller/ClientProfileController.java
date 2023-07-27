package azzure.health.portal.controller;

import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Client;
import azzure.health.portal.service.ClientProfileService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientProfileController {
    @Autowired
    private ClientProfileService clientProfileService;
    
    @PostMapping("/user/clientprofile")
    public String clientProfile(@RequestBody Client client) {
        return clientProfileService.clientProfile(client);
    }

    @GetMapping("/user/clientprofile/{clientprofileid}")
    public Optional<Client> clientget(@PathVariable Long clientprofileid) {
        return clientProfileService.clientget(clientprofileid);
    }

    @PutMapping("/user/clientprofile/update/{id}")
    public String clientProfileUpdate(@RequestBody Client client, @PathVariable Long id) {
        return clientProfileService.clientProfileUpdate(client, id);
    }
    
    

    
}
