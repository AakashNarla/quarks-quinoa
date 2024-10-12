package com.aakashnarla.playground.dto;

import java.util.List;

public class ProjectsDto
{
    @Override
    public String toString()
    {
        return "ProjectsDto{" +
                "projects=" + projects +
                '}';
    }

    public List<String> getProjects()
    {
        return projects;
    }

    public void setProjects(List<String> projects)
    {
        this.projects = projects;
    }

    private List<String> projects;
}
