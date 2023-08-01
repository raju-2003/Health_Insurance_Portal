package Fit_Fusion.dao;

import java.sql.SQLException;

import Fit_Fusion.classes.Goals;

public interface GoalsDAO {
	boolean addGoal(Goals g) throws SQLException;
	Goals viewGoal(int userId) throws SQLException;
}
