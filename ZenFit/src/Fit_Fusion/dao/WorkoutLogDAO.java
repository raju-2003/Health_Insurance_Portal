package Fit_Fusion.dao;

import java.sql.SQLException;
import java.util.List;

import Fit_Fusion.classes.WorkoutLog;

public interface WorkoutLogDAO {
	List<WorkoutLog> viewWorkoutLog(int id) throws SQLException;
	boolean addWorkoutLog(WorkoutLog workout) throws SQLException;
}
