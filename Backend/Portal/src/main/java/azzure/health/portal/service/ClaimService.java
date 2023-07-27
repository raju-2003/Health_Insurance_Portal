package azzure.health.portal.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import azzure.health.portal.entity.Claim;
import azzure.health.portal.repository.Claimrepo;

@Service
public class ClaimService {
    @Autowired
    private Claimrepo claimrepo;

	public List<Claim> getAllClaims() {
		return claimrepo.findAll();
	}

    public Optional<Claim> getClaimByid(Long id) {
        return claimrepo.findById(id);
    }

    public List<Claim> getClaimByProfileId(Long clientprofileid) {
        return claimrepo.findByClientprofileid(clientprofileid);
    }

    public List<Claim> getClaimByCompanyname(String companyname) {
        return claimrepo.findByCompanyname(companyname);
    }

    public long addClaim(Claim claim) {
        return claimrepo.save(claim).getClaimid();
    }

    public String updateClaim(Long id, Claim claim) {
        if(claimrepo.findById(id).isPresent()) {
            Claim existingClaim = claimrepo.findById(id).get();
            existingClaim.setPolicyid(claim.getPolicyid());
            existingClaim.setCompanyname(claim.getCompanyname());
            existingClaim.setClientprofileid(claim.getClientprofileid());
            existingClaim.setClaimdate(claim.getClaimdate());
            existingClaim.setClaimamount(claim.getClaimamount());
            claimrepo.saveAndFlush(existingClaim);
            return "Claim updated successfully";
        }
        else
            return "Claim not found";
    }

    public String deleteClaim(long id){
        try{
            claimrepo.deleteById(id);
            return "Claim deleted successfully";
        }catch(Exception e){
            return "Claim not found";
        }
    }

   

    
    
}
