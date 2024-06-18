const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const Employee = require('../models/Employee');

router.get('/', async (req, res) => {
  try {
    const departments = await Department.find().populate('employees');
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const department = new Department({
    name: req.body.name,
  });

  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (req.body.name != null) {
      department.name = req.body.name;
    }
    if (req.body.employees != null) {
      department.employees = req.body.employees;
    }

    const updatedDepartment = await department.save();
    res.json(updatedDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Department.findByIdAndRemove(req.params.id);
    res.json({ message: 'Department deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
