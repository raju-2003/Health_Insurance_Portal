package azzure.health.portal.service;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Client;
import azzure.health.portal.repository.Clientrepo;

@Service
public class ClientProfileService {
    @Autowired
    private Clientrepo clientrepo;

    public String clientProfile(Client client) {
        clientrepo.save(client);
        return "Client Profile Created Successfully";
    }

    

    public String clientProfileUpdate(Client client, Long id) {
        if(clientrepo.findById(id).orElse(null) != null) {
            clientrepo.save(client);
            return "Client Profile Updated Successfully";
        }
        return "Client Profile Not Found";
    }



    public Optional<Client> clientget(Long clientprofileid) {
        return clientrepo.findById(clientprofileid);
    }
        

    
    
}
