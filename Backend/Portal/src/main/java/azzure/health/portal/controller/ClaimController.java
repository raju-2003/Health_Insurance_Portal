package azzure.health.portal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Claim;
import azzure.health.portal.service.ClaimService;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
public class ClaimController {
    @Autowired
    private ClaimService claimService;

    @GetMapping("/user/claims")
    public List<Claim> getAllClaims() {
        return claimService.getAllClaims();
    }

    @GetMapping("/user/claims/{id}")
    public Optional<Claim> getClaimByid(@PathVariable Long id) {
        return claimService.getClaimByid(id);
    }

    @GetMapping("/user/claims/profile/{clientprofileid}")
    public List<Claim> getClaimByProfileId(@PathVariable Long clientprofileid) {
        return claimService.getClaimByProfileId(clientprofileid);
    }

    @GetMapping("/user/claims/companyname/{companyname}")
    public List<Claim> getClaimByPolicyId(@PathVariable String companyname) {
        return claimService.getClaimByCompanyname(companyname);
    }

    @PostMapping("/user/register/claims")
    public long addClaim(@RequestBody Claim claim) {
        return claimService.addClaim(claim);

    }

    @PutMapping("/user/claims/{id}")
    public String updateClaim(@RequestBody Claim claim, @PathVariable Long id) {
       return claimService.updateClaim(id, claim);
    }

    @DeleteMapping("/user/claims/{id}")
    public String deleteClaim(@PathVariable Long id) {
        return claimService.deleteClaim(id);
    }
}
