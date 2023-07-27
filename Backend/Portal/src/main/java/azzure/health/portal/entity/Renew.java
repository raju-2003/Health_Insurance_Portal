package azzure.health.portal.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
@Table(name = "renew")
public class Renew {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long renewid;
    private long policyid;
    private long clientprofileid;
    private String renewdate;
    private String renewduration;
    private String renewamount;

    
}
