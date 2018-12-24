// population AKA joining 
// this code is from jadar-be/src/controllers/vacancy.js


import VacancyModel, { applicantFactory } from './../models/vacancy'
import CandidateModel from './../models/candidate'
import Company from './../models/company'
import * as ops from './operations'
import async from 'async'
import { logger, objs } from './../utils'

// doing it completely manully: 
export const candidates = (req, res) => {
  async.waterfall(
    [
      callback => VacancyModel.findById(req.query.id)
        .lean()
        .then(vacancy => callback(null, vacancy))
        .catch(err => callback(err))
      ,
      (vacancy, callback) => {
        CandidateModel.find({_id: {$in: vacancy.candidates.map(candidate => candidate.candidateId)}})
          .lean()
          .then(candidates => {
            callback(null, vacancy, candidates)
          })
          .catch(err => callback(err))
      }
    ],
    (err, vacancy, candidates) => {
      if (err) {
        logger.error(err)
        res.status(500).send(err)
      } else {
        const vacancyCandidates = vacancy.candidates.map(vacancyCandidate => {
          const candidate = candidates.find(one => one._id.equals(vacancyCandidate.candidateId))
          return Object.assign(
            vacancyCandidate,
            {
              firstName: candidate.firstName,
              lastName: candidate.lastName
            }
          )
        })
        res.json(vacancyCandidates)
      }
    }
  )
}

// same with population: 
export const candidates = (req, res) => {
  VacancyModel
    .findById(req.query.id)
    .populate('candidates.candidate', '_id firstName lastName')
    //.lean()
    .then(vacancy => {
      res.status(200).json(vacancy.candidates)
    })
}


