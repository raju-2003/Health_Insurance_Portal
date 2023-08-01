package Fit_Fusion.classes;

public class User {	
	private int userId;
	private String username;
	private String password;
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public User() {}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getUserId() {
		return this.userId;
	}
	public void setUserId(int id)
	{
		this.userId=id;
	}

	//sql query for table creation
	//create table user (id int not null auto_increment, username varchar(255), password varchar(255), primary key(id));

}
