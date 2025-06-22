import { useModal } from '../helpers/hooks/useModal';
import { useScrollAnchor } from '../helpers/hooks/useScrollAnchor';
import { useScrollTop } from '../helpers/hooks/useScrollTop';

const Document = ({ children }) => {
    useModal();
    useScrollAnchor();
    useScrollTop();
    return children;
}

export { Document };