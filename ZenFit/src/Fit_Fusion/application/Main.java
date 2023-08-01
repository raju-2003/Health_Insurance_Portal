package Fit_Fusion.application;

import java.sql.Date;
import java.util.Scanner;

import Fit_Fusion.classes.FoodLog;
import Fit_Fusion.classes.Goals;
import Fit_Fusion.classes.Profile;
import Fit_Fusion.classes.User;
import Fit_Fusion.classes.WorkoutLog;
import Fit_Fusion.dao.FoodLogDAO;
import Fit_Fusion.dao.GoalsDAO;
import Fit_Fusion.dao.ProfileDAO;
import Fit_Fusion.dao.UserDAO;
import Fit_Fusion.dao.WorkoutLogDAO;
import Fit_Fusion.daoimpl.FoodLogDaoImpl;
import Fit_Fusion.daoimpl.GoalsDaoImpl;
import Fit_Fusion.daoimpl.ProfileDaoImpl;
import Fit_Fusion.daoimpl.UserDaoImpl;
import Fit_Fusion.daoimpl.WorkoutLogDaoImpl;

import java.sql.SQLException;
import java.util.List;

public class Main {

	public static void main(String[] args) throws SQLException {
		Scanner sc = new Scanner(System.in);
		UserDAO userDao = new UserDaoImpl();
		ProfileDAO profileDao = new ProfileDaoImpl();
		GoalsDAO goalsDao=new GoalsDaoImpl();
		WorkoutLogDAO workoutDao=new WorkoutLogDaoImpl();
		FoodLogDAO foodDao=new FoodLogDaoImpl();
		System.out.println("1.New User");
		System.out.println("2.Login");
		int choice = sc.nextInt();
		sc.nextLine();
		switch(choice)
		{
		case 1:
			User newUser = new User();
			System.out.println("\nEnter user name: ");
	        newUser.setUsername(sc.nextLine());
	        System.out.println("Enter password: ");
	        newUser.setPassword(sc.nextLine());
	        userDao.addUser(newUser);
	        
	        Profile newProfile = new Profile();
	        System.out.println("\nFill Profile: \n");
	        newProfile.setUserId(newUser.getUserId());
	        System.out.println("Enter first name: ");
	        newProfile.setFirstName(sc.nextLine());
	        System.out.println("Enter last name: ");
	        newProfile.setLastName(sc.nextLine());
	        System.out.println("Enter age: ");
	        newProfile.setAge(sc.nextInt());
	        System.out.println("Enter height: ");
	        newProfile.setHeight(sc.nextDouble());
	        sc.nextLine();
	        System.out.println("Enter gender: ");
	        newProfile.setGender(sc.nextLine());
	        profileDao.addProfile(newProfile);
	        
	        Goals newGoal = new Goals();
	        System.out.println("\nFill Goals: \n");
	        newGoal.setUserId(newUser.getUserId());
	        System.out.println("Enter current weight: ");	
	        newGoal.setCurrentWeight(sc.nextDouble());
	        System.out.println("Enter start fat: ");	
	        newGoal.setStartFat(sc.nextDouble());
	        System.out.println("Enter target fat: ");	
	        newGoal.setTargetFat(sc.nextDouble());
	        System.out.println("Enter current calories: ");	
	        newGoal.setStartCalories(sc.nextDouble());
	        sc.nextLine();
	        goalsDao.addGoal(newGoal);
	        break;
	        
		case 2:
			System.out.println("\nEnter user name: ");
	        String username = sc.nextLine();
	        System.out.println("Enter password: ");
	        String password = sc.nextLine();
			int userId = userDao.verifyUser(username,password);
			if(userId!=0)
			{
				System.out.println("1.View Profile");
				System.out.println("2.Update Profile");
				System.out.println("3.Log Workout");
				System.out.println("4.View Workout History");
				System.out.println("5.Log Food Intake");
				System.out.println("6.View Food History");
				System.out.println("7.View Goal");
				System.out.println("8.Exit");
				int choice2 = sc.nextInt();
				sc.nextLine();
				while(choice2 != 9) {
					switch(choice2)
					{
						case 1:
							Profile profile = profileDao.getProfileById(userId);
							if(profile!=null){
								System.out.println("\nProfile: \n");
								System.out.println("First Name: "+profile.getFirstName());
								System.out.println("Last Name: "+profile.getLastName());
								System.out.println("Age: "+profile.getAge());
								System.out.println("Gender: "+profile.getGender());
								System.out.println("Height: "+profile.getHeight());
								System.out.println("--------------------------");
							}
							break;
							
						case 2:
							Profile profileToUpdate = profileDao.getProfileById(userId);
							if (profileToUpdate != null) {
								System.out.println("Enter new first name (or press Enter to skip): ");
							    String newFirstName = sc.nextLine();
							    if (!newFirstName.isEmpty()) {
						            profileToUpdate.setFirstName(newFirstName);
						        }
							    System.out.println("Enter new last name (or press Enter to skip): ");
							    String newLastName = sc.nextLine();
							    if (!newLastName.isEmpty()) {
						            profileToUpdate.setLastName(newLastName);
						        }
							    System.out.println("Enter new age (or 0 to skip): ");
							    int newAge = sc.nextInt();
							    sc.nextLine(); 
							    if (newAge != 0) {
						            profileToUpdate.setAge(newAge);
						        }
							    System.out.println("Enter new height (or 0.0 to skip): ");
							    double newHeight = sc.nextDouble();
							    sc.nextLine();
							    if (newHeight != 0.0) {
						            profileToUpdate.setHeight(newHeight);
						        }
							    System.out.println("Enter new gender (or press Enter to skip): ");
							    String newGender = sc.nextLine();
							    if (!newGender.isEmpty()) {
						            profileToUpdate.setGender(newGender);
						        }					    
	
						        profileDao.updateProfile(profileToUpdate);
						        System.out.println("Profile updated successfully!");
						    } else {
						        System.out.println("Error: Unable to retrieve the profile.");
						    }
						    break;
							
						case 3:						
							System.out.println("\nFill workout details: ");
							WorkoutLog workout=new WorkoutLog();
							workout.setUserId(userId);
							System.out.println("Enter date (YYYY-MM-DD): ");	
							String str= sc.nextLine();
							Date date = Date.valueOf(str);
							workout.setDate(date);
							System.out.println("Enter workout name: ");	
							workout.setName(sc.nextLine());
							System.out.println("Enter workout intensity: ( Easy/ Medium/Hard) ");	
							workout.setIntensity(sc.nextLine());
							System.out.println("Enter time in minutes: ");
							workout.setTime(sc.nextInt());
							System.out.println("Enter no. of reps: ");
							workout.setReps(sc.nextInt());
							System.out.println("Enter no. of calories burnt: ");
							workout.setCalories(sc.nextInt());
							sc.nextLine();
							System.out.println("Enter category of workout: ");
							workout.setCategory(sc.nextLine());
							workoutDao.addWorkoutLog(workout);
							break;
							
						case 4:
							List<WorkoutLog> log = workoutDao.viewWorkoutLog(userId);
							System.out.println("\nWorkout details: \n");
							for (WorkoutLog work : log) {
							    System.out.println("Date: " + work.getDate());
							    System.out.println("Workout Name: " + work.getName());
							    System.out.println("Intensity: " + work.getIntensity());
							    System.out.println("Time: " + work.getTime() + " minutes");
							    System.out.println("Reps: " + work.getReps());
							    System.out.println("Category: " + work.getCategory());
							    System.out.println("Calories Burnt: " + work.getCalories());
							    System.out.println("--------------------------");
							}
							break;
						case 5:
							FoodLog food=new FoodLog();
							System.out.println("\nFill food intake details: \n");
							food.setUserId(userId);
							System.out.println("Enter date (YYYY-MM-DD): ");	
							String str2= sc.nextLine();
							Date food_date = Date.valueOf(str2);
							food.setDate(food_date);
							System.out.println("Enter food name: ");	
							food.setName(sc.nextLine());
							System.out.println("Enter no. of calories : ");
							food.setCalories(sc.nextInt());
							sc.nextLine();
							foodDao.addFoodLog(food);
							break;
							
						case 6:
							System.out.println("\nFood history: \n");
							List<FoodLog> logs = foodDao.viewFoodLog(userId);
					        for (FoodLog foodLog : logs) {
					            System.out.println("User ID: " + foodLog.getUserId());
					            System.out.println("Date: " + foodLog.getDate());
					            System.out.println("Name: " + foodLog.getName());
					            System.out.println("Calories: " + foodLog.getCalories());
					            System.out.println("--------------------------");
					        }
					        break;
					        
						case 7:
							 Goals userGoals = goalsDao.viewGoal(userId);
							    if (userGoals != null) {
							        System.out.println("\nGoals: \n");
							        System.out.println("Current Weight: " + userGoals.getCurrentWeight());
							        System.out.println("Goal Weight: " + userGoals.getGoalWeight());
							        System.out.println("Start Fat: " + userGoals.getStartFat());
							        System.out.println("Target Fat: " + userGoals.getTargetFat());
							        System.out.println("Start Calories: " + userGoals.getStartCalories());
							        System.out.println("Target Calories: " + userGoals.getTargetCalories());
							        System.out.println("Rate of Weight Change: " + userGoals.getRateOfWeightChange());
							        System.out.println("--------------------------");
							    } else {
							        System.out.println("No goals found for the user.");
							    }
							    break;
					}
					System.out.println("1.View Profile");
					System.out.println("2.Update Profile");
					System.out.println("3.Log Workout");
					System.out.println("4.View Workout History");
					System.out.println("5.Log Food Intake");
					System.out.println("6.View Food History");
					System.out.println("7.View Goal");
					System.out.println("8.Update Goal");
					System.out.println("9.Exit");;
					System.out.println("Enter choice: ");
					choice2 = sc.nextInt();
					sc.nextLine();
				}
			}

		}
}

}
