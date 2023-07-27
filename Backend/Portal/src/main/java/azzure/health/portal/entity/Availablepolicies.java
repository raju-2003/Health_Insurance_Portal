package azzure.health.portal.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "availablepolicies")
public class Availablepolicies {
    @Id
    private long policyid;
    private String policyname;
    private String companyid;
    private String companyname;
    private String contact;
    private String coverageamount;
    private String premiumamount;
    
}
