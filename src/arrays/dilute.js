const insertBetween = (insertee, array) => array.reduce(
    (acc, item, i, { length }) => {
        if (i && i < length) {
            return [...acc, insertee, item];
        }
        return [...acc, item];
    },
    []
);
