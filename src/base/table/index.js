import React, { useState, useEffect, Fragment } from 'react';
import DataTable from 'react-data-table-component';
// eslint-disable-next-line import/no-unresolved
import crud from '../../apis/crud';
import {ChevronDown} from "react-feather";

const BaseTable = (props) => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const result = await crud.get(props.link);
        setData(result || []);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Fragment>
            <DataTable
                title={props.title}
                columns={props.columns}
                data={props.data}
                sortIcon={<ChevronDown />}
                className="react-dataTable"
                pagination
                responsive
                highlightOnHover={props.highlightOnHover}
                pointerOnHover={props.pointerOnHover}
                noHeader={props.noHeader}
                subHeaderComponent={props.subHeaderComponent}
                noDataComponent={props.noDataComponent}
                paginationComponentOptions={props.paginationComponentOptions}
                paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}
                paginationPerPage={props.paginationPerPage}
                paginationTotalRows={props.paginationTotalRows}
                paginationServer={props.paginationServer}
                paginationDefaultPage={props.paginationDefaultPage}
                paginationResetDefaultPage={props.paginationResetDefaultPage}
                // paginationComponent={props.paginationComponent}
            />
        </Fragment>
    );
};

export default BaseTable;
