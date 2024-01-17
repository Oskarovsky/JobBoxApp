package com.server.jobboxapp.service.mapper

import com.server.jobboxapp.entity.employer.Employer
import com.server.jobboxapp.entity.employer.EmployerDto
import org.springframework.beans.BeanUtils
import org.springframework.beans.BeanWrapperImpl


class EmployerMapper {

    companion object {
        fun mapDtoToEntity(api: EmployerDto, db: Employer): Employer {
            BeanUtils.copyProperties(api, db, *getNullPropertyNames(api))
            return db
        }
        private fun getNullPropertyNames(source: Any): Array<String> {
            val src = BeanWrapperImpl(source)
            val pds = src.propertyDescriptors

            val emptyNames = HashSet<String>()
            for (pd in pds) {
                val srcValue = src.getPropertyValue(pd.name)
                if (srcValue == null) emptyNames.add(pd.name)
            }
            return emptyNames.toTypedArray()
        }
    }
}


