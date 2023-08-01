package Fit_Fusion.classes;

public class Goals {
	private double currentWeight;
	private double goalWeight;
	private double startFat;
	private double targetFat;
	private double startCalories;
	private double targetCalories;
	private double rateOfWeightChange;
	private int userId;
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public double getCurrentWeight() {
		return currentWeight;
	}
	public void setCurrentWeight(double currentWeight) {
		this.currentWeight = currentWeight;
	}
	public double getGoalWeight() {
		return goalWeight;
	}
	public void setGoalWeight() {
		this.goalWeight = currentWeight-(currentWeight*((startFat-targetFat)/100));
	}
	public double getStartFat() {
		return startFat;
	}
	public void setStartFat(double startFat) {
		this.startFat = startFat;
	}
	public double getTargetFat() {
		return targetFat;
	}
	public void setTargetFat(double targetFat) {
		this.targetFat = targetFat;
	}
	public double getStartCalories() {
		return startCalories;
	}
	public void setStartCalories(double startCalories) {
		this.startCalories = startCalories;
	}
	public double getTargetCalories() {
		return targetCalories;
	}
	public void setTargetCalories() {
		this.targetCalories = startCalories-(currentWeight*10);
	}
	public double getRateOfWeightChange() {
		return rateOfWeightChange;
	}
	public void setRateOfWeightChange() {
		this.rateOfWeightChange = currentWeight*(startFat-targetFat)/10;	
	}
	public Goals() {}
	public Goals(double currentWeight, double startFat, double targetFat, double startCalories) {
		super();
		this.currentWeight = currentWeight;
		this.startFat = startFat;
		this.targetFat = targetFat;
		this.startCalories = startCalories;
	}
}