package Fit_Fusion.daoimpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import Fit_Fusion.classes.Goals;
import Fit_Fusion.classes.Profile;
import Fit_Fusion.dao.GoalsDAO;
import Fit_Fusion.util.DbConnection;

public class GoalsDaoImpl implements GoalsDAO{
	private static final String INSERT_QUERY = "INSERT INTO goals (userId, currentWeight,goalWeight,startFat, targetFat, rateOfWeightChange,startCalories,targetCalories) VALUES (?,?,?,?,?,?,?,?)";
	private static final String SELECT_QUERY= "SELECT * FROM goals WHERE userId = ?";
	@Override
	public boolean addGoal(Goals goal) throws SQLException {
		Connection con = DbConnection.getConnection();
		PreparedStatement st = con.prepareStatement(INSERT_QUERY);
		st.setInt(1, goal.getUserId());
		st.setDouble(2, goal.getCurrentWeight());
		st.setDouble(3, goal.getGoalWeight());
		st.setDouble(4, goal.getStartFat());
		st.setDouble(5, goal.getTargetFat());
		st.setDouble(6, goal.getRateOfWeightChange());
		st.setDouble(7, goal.getStartCalories());
		st.setDouble(8, goal.getTargetCalories());
		
		return st.executeUpdate()>0;
	}

	@Override
	public Goals viewGoal(int userId) throws SQLException {
		Connection con = DbConnection.getConnection();
		PreparedStatement st = con.prepareStatement(SELECT_QUERY);
		st.setInt(1,userId);
		ResultSet rs=st.executeQuery();
		if(rs.next())
		{
			 Goals goals = new Goals();
	         goals.setUserId(rs.getInt("userId"));
	         goals.setCurrentWeight(rs.getDouble("currentWeight"));
	         goals.setGoalWeight();
	         goals.setStartFat(rs.getDouble("startFat"));
	         goals.setTargetFat(rs.getDouble("targetFat"));
	         goals.setStartCalories(rs.getDouble("startCalories"));
	         goals.setTargetCalories();
	         goals.setRateOfWeightChange();
			return goals;
		}
		return null;
	}

}
